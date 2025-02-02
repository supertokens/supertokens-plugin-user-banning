// import { SuperTokensPlugin } from "supertokens-auth-react/lib/build/types";
import { SuperTokensPlugin } from "supertokens-auth-react/lib/build/types";
import { PLUGIN_ID } from "./config";
import { BanUserPage } from "./pages";

// todo: feedback: need some util for calling the custom plugin api

export const init = ({
  apiDomain,
}: {
  apiDomain: string;
  websiteDomain: string;
}): SuperTokensPlugin => {
  return {
    id: PLUGIN_ID,
    routeHandlers: [
      {
        path: "/admin/ban-user",
        // todo: feedback: it would be useful for the handler to have access to the st instance config, otherwise it's not possible to get the base path
        handler: () => BanUserPage.call(null, { apiDomain }),
      },
    ],
    overrideMap: {
      emailpassword: {
        functions(originalImplementation) {
          return {
            ...originalImplementation,
            signUp(input) {
              console.log("signUp", input);
              return originalImplementation.signUp(input);
            },
            signIn: async (input) => {
              console.log("signIn", input);
              return originalImplementation.signIn(input);
            },
          };
        },
      },
      session: {
        recipeInitRequired: true,
        functions: (originalImplementation) => {
          return {
            ...originalImplementation,
            signOut(input) {
              console.log("signOut", input);
              return originalImplementation.signOut(input);
            },
          };
        },
      },
    },
  };
};
