(function(window) {
  // window["env"] = window["env"] || {};

  // BackEnd Environment variables
  window["env"]["fineractApiUrls"] = '';
  window["env"]["fineractApiUrl"]  = process.env.API_URL || 'https://core-api.fifund.idmfh.com';

  window["env"]["apiProvider"] = process.env.API_PROVIDER || '/api';
  window["env"]["apiVersion"]  = process.env.API_VERSION || '/v1';

  window["env"]["fineractPlatformTenantId"]  = process.env.TENANT_ID || '';
  window["env"]["fineractPlatformTenantIds"]  = '';

  // Language Environment variables
  window["env"]["defaultLanguage"] = '';
  window["env"]["supportedLanguages"] = '';

  window['env']['preloadClients'] = process.env.PRELOAD_CLIENTS || false;'';

  // Char delimiter to Export CSV options: ',' ';' '|' ' '
  window['env']['defaultCharDelimiter'] = '';

  // Display or not the Server Selector
  window['env']['allowServerSwitch'] = process.env.ALLOW_SERVER_SWITCH || false;

  // Display or not the BackEnd Info
  window['env']['displayBackEndInfo'] = process.env.DISPLAY_BACKEND_INFO || false;

  // Display or not the Tenant Selector
  window['env']['displayTenantSelector'] = process.env.DISPLAY_TENANT_SELECTOR || false;

  // Time in seconds for Notifications, default 60 seconds
  window['env']['waitTimeForNotifications'] = '';

  // Time in seconds for COB Catch-Up, default 30 seconds
  window['env']['waitTimeForCOBCatchUp'] = '';

  // Time in milliseconds for Session idle timeout, default 300000 seconds
  window['env']['sessionIdleTimeout'] = '0';

  // OAuth Server Enabled
  window['env']['oauthServerEnabled'] = false;

  // OAuth Server URL
  window['env']['oauthServerUrl'] = '';

  // OAuth Client Id
  window['env']['oauthAppId'] = '';

  // OIDC Plugin Environment variables
  window['env']['oidcServerEnabled'] = false;
  window['env']['oidcBaseUrl']       = '';
  window['env']['oidcClientId']      = '';
  window['env']['oidcApiUrl']        = '';
  window['env']['oidcFrontUrl']      = '';

})(this);
