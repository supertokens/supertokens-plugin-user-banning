import { BaseResponse } from "supertokens-node/lib/build/framework";

export const sendUnauthorisedAccess = (res: BaseResponse) => {
  res.setStatusCode(401);
  res.sendJSONResponse({
    status: "UNAUTHORISED",
    message: "Unauthorised access",
  });
};
