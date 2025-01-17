import {
  BaseRequest,
  BaseResponse,
} from "supertokens-node/lib/build/framework";
import Session from "supertokens-node/recipe/session";
import UserRoles from "supertokens-node/recipe/userroles";
import { sendUnauthorisedAccess } from ".";

export const isAuthorised = async (
  req: BaseRequest,
  res: BaseResponse,
  role?: string | { any: string[] } | { all: string[] } | false
) => {
  return !!(await getAuthorisedUserId(req, res, role));
};

export const getAuthorisedUserId = async (
  req: BaseRequest,
  res: BaseResponse,
  role?: string | { any: string[] } | { all: string[] } | false
) => {
  const validators: Session.SessionClaimValidator[] = [];

  if (typeof role === "string") {
    validators.push(UserRoles.UserRoleClaim.validators.includes(role));
  } else if (role && "any" in role) {
    validators.push(UserRoles.UserRoleClaim.validators.includesAny(role.any));
  } else if (role && "all" in role) {
    validators.push(UserRoles.UserRoleClaim.validators.includesAll(role.all));
  }

  let userId: string;
  try {
    let session = await Session.getSession(req, res, {
      overrideGlobalClaimValidators: async (globalValidators) => [
        ...globalValidators,
        ...validators,
      ],
    });
    userId = session.getUserId();
  } catch (e) {
    sendUnauthorisedAccess(res);
    return false;
  }

  if (!userId) {
    sendUnauthorisedAccess(res);
    return false;
  }

  return userId;
};
