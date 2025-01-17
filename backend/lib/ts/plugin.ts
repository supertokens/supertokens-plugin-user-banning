import { SuperTokensPlugin } from "supertokens-node/types";
import Session from "supertokens-node/recipe/session";
import { PLUGIN_ID, HANDLE_BASE_PATH, PLUGIN_SDK_VERSION } from "./config";
import { UserBanningService } from "./userBanningService";
import { isAuthorised, sendUnauthorisedAccess } from "./utils";

export const init = (): SuperTokensPlugin => {
  const userBanningService = new UserBanningService();

  return {
    id: PLUGIN_ID,
    compatibleSDKVersions: PLUGIN_SDK_VERSION,
    routeHandlers: [
      {
        path: HANDLE_BASE_PATH + "/ban",
        method: "post",
        handler: async (req, res, userContext) => {
          // make sure the user is allowed to ban other users
          if (!(await isAuthorised(req, res, "admin"))) {
            sendUnauthorisedAccess(res);
            return null;
          }

          // make sure the request is valid
          const body = await req.getJSONBody();
          if (!body.userId || typeof body.isBanned !== "boolean") {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: "BAD_INPUT_ERROR",
              message: "userId and isBanned are required",
            });
            return null;
          }

          // set the ban status
          const result = await userBanningService.setBanStatus(
            body.userId,
            body.isBanned,
            userContext
          );

          // revoke all sessions if the user is banned
          if (body.isBanned) {
            await Session.revokeAllSessionsForUser(body.userId);
          }

          if (result.status === "OK") {
            res.setStatusCode(200);
            res.sendJSONResponse({ status: "OK" });
          } else {
            res.setStatusCode(400);
            res.sendJSONResponse(result);
          }

          return null;
        },
      },
      {
        path: HANDLE_BASE_PATH + "/ban",
        method: "get",
        handler: async (req, res, userContext) => {
          // make sure the user is allowed to get the ban status
          if (!(await isAuthorised(req, res, "admin"))) {
            sendUnauthorisedAccess(res);
            return null;
          }

          // make sure the request is valid
          const userId = await req.getKeyValueFromQuery("userId");
          if (!userId) {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: "BAD_INPUT_ERROR",
              message: "userId and isBanned are required",
            });
            return null;
          }

          // get the ban status
          const result = await userBanningService.getBanStatus(
            userId,
            userContext
          );

          if (result.status === "OK") {
            res.setStatusCode(200);
            res.sendJSONResponse(result);
          } else {
            res.setStatusCode(400);
            res.sendJSONResponse(result);
          }

          return null;
        },
      },
    ],
    overrideMap: {
      session: {
        functions: (originalImplementation) => {
          return {
            ...originalImplementation,

            createNewSession: async (input) => {
              const result = await userBanningService.getBanStatus(
                input.userId,
                input.userContext
              );
              if (result.status !== "OK") {
                throw new Error("Failed to get user metadata");
              }

              // throw an error if the user is banned. Can't return a status, because the createNewSession doesn't allow for returning a status.
              if (result.banned) {
                throw new Error("User banned");
              }

              return originalImplementation.createNewSession(input);
            },

            getSession: async (input) => {
              const result = await originalImplementation.getSession(input);
              if (!result) return undefined;

              const userId = result.getUserId(input.userContext);
              if (!userId) return result;

              const banned = userBanningService.getBanStatusFromCache(userId);
              if (!banned) return result; // even if undefined, we still return the result, because we won't be hitting the database

              return undefined;
            },
          };
        },
      },
    },
  };
};
