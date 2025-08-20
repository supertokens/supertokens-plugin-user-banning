import SuperTokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import { PermissionClaim } from 'supertokens-node/recipe/userroles';
const PLUGIN_ID = 'supertokens-plugin-user-banning';
const PLUGIN_SDK_VERSION = ['23.0.0', '23.0.1'];
const HANDLE_BASE_PATH = `/plugin/${PLUGIN_ID}`;
const USER_METADATA_BAN_STATUS_KEY = 'isBanned';
class UserBanningService {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  async getBanStatus(userId, userContext) {
    const result = await UserMetadata.getUserMetadata(userId, userContext);
    this.setBanStatusToCache(userId, result.metadata[USER_METADATA_BAN_STATUS_KEY]);
    return {
      status: 'OK',
      banned: result.metadata[USER_METADATA_BAN_STATUS_KEY] ?? false,
    };
  }
  async setBanStatus(userId, isBanned, userContext) {
    await UserMetadata.updateUserMetadata(userId, { [USER_METADATA_BAN_STATUS_KEY]: !!isBanned }, userContext);
    this.setBanStatusToCache(userId, !!isBanned);
    return { status: 'OK' };
  }
  setBanStatusToCache(userId, isBanned) {
    this.cache.set(userId, isBanned);
  }
  getBanStatusFromCache(userId) {
    return this.cache.get(userId);
  }
}
const init = () => {
  const userBanningService = new UserBanningService();
  return {
    id: PLUGIN_ID,
    compatibleSDKVersions: PLUGIN_SDK_VERSION,
    routeHandlers: [
      {
        path: HANDLE_BASE_PATH + '/ban',
        method: 'post',
        verifySessionOptions: {
          sessionRequired: true,
          overrideGlobalClaimValidators: (globalClaimValidators) => {
            return [...globalClaimValidators, PermissionClaim.validators.includes('ban-user')];
          },
        },
        handler: async (req, res, _, userContext) => {
          var _a;
          let tenantId = await req.getKeyValueFromQuery('tenantId');
          if (!tenantId) {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: 'BAD_INPUT_ERROR',
              message: 'tenantId is required',
            });
            return null;
          }
          const body = await req.getJSONBody();
          if (typeof body.isBanned !== 'boolean') {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: 'BAD_INPUT_ERROR',
              message: 'isBanned are required',
            });
            return null;
          }
          let userId;
          if (body.userId) {
            userId = body.userId;
          } else if (body.email) {
            const user = await SuperTokens.listUsersByAccountInfo(tenantId, {
              email: body.email.toLowerCase(),
            });
            userId = (_a = user == null ? void 0 : user[0]) == null ? void 0 : _a.id;
          } else {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: 'BAD_INPUT_ERROR',
              message: 'userId or email is required',
            });
            return null;
          }
          if (!userId) {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: 'BAD_INPUT_ERROR',
              message: 'user not found',
            });
            return null;
          }
          const result = await userBanningService.setBanStatus(userId, body.isBanned, userContext);
          if (body.isBanned) {
            await Session.revokeAllSessionsForUser(userId);
          }
          if (result.status === 'OK') {
            res.setStatusCode(200);
            res.sendJSONResponse({ status: 'OK' });
          } else {
            res.setStatusCode(400);
            res.sendJSONResponse(result);
          }
          return null;
        },
      },
      {
        path: HANDLE_BASE_PATH + '/ban',
        method: 'get',
        verifySessionOptions: {
          sessionRequired: true,
          overrideGlobalClaimValidators: (globalClaimValidators, session, userContext) => {
            return [...globalClaimValidators, PermissionClaim.validators.includes('ban-user')];
          },
        },
        handler: async (req, res, _, userContext) => {
          var _a;
          let tenantId = await req.getKeyValueFromQuery('tenantId');
          if (!tenantId) {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: 'BAD_INPUT_ERROR',
              message: 'tenantId is required',
            });
            return null;
          }
          let userId = await req.getKeyValueFromQuery('userId');
          let email = await req.getKeyValueFromQuery('email');
          if (email) {
            const user = await SuperTokens.listUsersByAccountInfo(tenantId, {
              email: email.toLowerCase(),
            });
            userId = (_a = user == null ? void 0 : user[0]) == null ? void 0 : _a.id;
          }
          userId = userId == null ? void 0 : userId.trim();
          if (!userId) {
            res.setStatusCode(400);
            res.sendJSONResponse({
              status: 'BAD_INPUT_ERROR',
              message: 'userId or email is required',
            });
            return null;
          }
          const result = await userBanningService.getBanStatus(userId, userContext);
          if (result.status === 'OK') {
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
              const result = await userBanningService.getBanStatus(input.userId, input.userContext);
              if (result.status !== 'OK') {
                throw new Error('Failed to get user metadata');
              }
              if (result.banned) {
                throw new Error('User banned');
              }
              return originalImplementation.createNewSession(input);
            },
            getSession: async (input) => {
              const result = await originalImplementation.getSession(input);
              if (!result) return void 0;
              const userId = result.getUserId(input.userContext);
              if (!userId) return result;
              const banned = userBanningService.getBanStatusFromCache(userId);
              if (!banned) return result;
              return void 0;
            },
          };
        },
      },
    },
  };
};
const index = { init };
export { PLUGIN_ID, index as default, init };
//# sourceMappingURL=index.js.map
