// scripts/generate-env.js
const fs = require('fs');
const path = require('path');

// Ensure public/assets exists
const assetsDir = path.join(__dirname, '..', 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const envFile = path.join(assetsDir, 'env.js');

// Build the env.js content
const content = `
window.env = {
  fineractPlatformTenantId: "${process.env.FINERACT_TENANT_ID || 'sandbox'}",
  fineractPlatformTenantIds: "${process.env.FINERACT_TENANT_IDS || 'sandbox'}",
  fineractApiUrl: "${process.env.FINERACT_API_URL || 'https://core-api.fifund.idmfh.com'}",
  fineractApiUrls: "${process.env.FINERACT_API_URLS || ''}",
  allowServerSwitch: "${process.env.ALLOW_SERVER_SWITCH || 'true'}",
  apiProvider: "${process.env.API_PROVIDER || '/api'}",
  apiVersion: "${process.env.API_VERSION || '/v1'}",
  defaultLanguage: "${process.env.DEFAULT_LANGUAGE || 'en-US'}",
  supportedLanguages: "${process.env.SUPPORTED_LANGUAGES || 'en-US'}",
  vNextApiUrl: "${process.env.VNEXT_API_URL || 'https://apis.mifos.community'}",
  vNextApiProvider: "${process.env.VNEXT_API_PROVIDER || '/vnext1'}",
  vNextApiVersion: "${process.env.VNEXT_API_VERSION || '/v1.0'}",
  interbankTransfers: ${process.env.INTERBANK_TRANSFERS || true},
  oidcServerEnabled: ${process.env.OIDC_SERVER_ENABLED || false},
  oidcBaseUrl: "${process.env.OIDC_BASE_URL || ''}",
  oidcClientId: "${process.env.OIDC_CLIENT_ID || ''}",
  oidcApiUrl: "${process.env.OIDC_API_URL || ''}",
  oidcFrontUrl: "${process.env.OIDC_FRONT_URL || ''}"
};
`;

fs.writeFileSync(envFile, content.trim() + "\n");
console.log(`Generated env.js at: ${envFile}`);