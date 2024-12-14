import { PublicClientApplication } from "@azure/msal-node";
import fs from "fs";
import path from "path";
import "server-only";

import { logger } from "@/lib/logger";

export const createEmailHTML = (data) => {
  // Customize HTML based on 'template' and available data
  // Use template literals for dynamic content
  let html = "";
  for (const [key, value] of Object.entries(data)) {
    if (key === "template") continue;
    html += `<p><strong>${key}:</strong> ${value}</p>`;
  }
  return html;
};

// Try to acquire token silently first
export async function acquireToken() {
  const tokenCacheFile = path.join(process.cwd(), "token_cache.json");

  const tenantId = process.env.MAILER_TENANT_ID;
  const clientId = process.env.MAILER_CLIENT_ID;

  // Create a public client app
  const authority = `https://login.microsoftonline.com/${tenantId}`;
  const config = {
    auth: {
      clientId: clientId,
      authority: authority,
    },
    cache: {
      cachePlugin: {
        beforeCacheAccess: async (cacheContext) => {
          if (fs.existsSync(tokenCacheFile)) {
            const cache = fs.readFileSync(tokenCacheFile, "utf-8");
            cacheContext.tokenCache.deserialize(cache);
          }
        },
        afterCacheAccess: async (cacheContext) => {
          if (cacheContext.cacheHasChanged) {
            fs.writeFileSync(
              tokenCacheFile,
              cacheContext.tokenCache.serialize()
            );
          }
        },
      },
    },
  };

  const pca = new PublicClientApplication(config);
  // Define the required scopes
  const scopes = ["https://graph.microsoft.com/Mail.Send"];

  const accounts = await pca.getTokenCache().getAllAccounts();
  let result = null;

  if (accounts.length > 0) {
    try {
      result = await pca.acquireTokenSilent({
        scopes: scopes,
        account: accounts[0],
      });
    } catch (error) {
      logger.error(
        "Silent token acquisition failed, initiating device code flow..."
      );
    }
  }

  if (!result) {
    try {
      const deviceCodeRequest = {
        deviceCodeCallback: (response) => console.log(response.message),
        scopes: scopes,
      };
      result = await pca.acquireTokenByDeviceCode(deviceCodeRequest);
    } catch (error) {
      logger.error("Device code flow failed:", error);
      throw error;
    }
  }
  return result?.accessToken || null;
}
