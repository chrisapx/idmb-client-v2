(function(window) {
  window["env"] = window["env"] || {};

  // BackEnd Environment variables
  window["env"]["fineractApiUrls"] = '';
  window["env"]["fineractApiUrl"]  = 'https://core-api.fifund.idmfh.com';

  window["env"]["apiProvider"] = '/api';
  window["env"]["apiVersion"]  = '/v1';

  // Pick this one from subdomain or set here
  window["env"]["fineractPlatformTenantId"]  = 'sandbox';
  window["env"]["fineractPlatformTenantIds"]  = '';

  // Language Environment variables
  window["env"]["defaultLanguage"] = 'en-US';
  window["env"]["supportedLanguages"] = "cs-CS,de-DE,en-US,es-MX,fr-FR,it-IT,ko-KO,lt-LT,lv-LV,ne-NE,pt-PT,sw-SW";
  window['env']['preloadClients'] = false;

  // Char delimiter to Export CSV options: ',' ';' '|' ' '
  window['env']['defaultCharDelimiter'] = ',';
  // Display or not the Server Selector
  window['env']['allowServerSwitch'] = false;

  // Display or not the BackEnd Info
  window['env']['displayBackEndInfo'] = false;

  // Display or not the Tenant Selector
  window['env']['displayTenantSelector'] = false;

  // Time in seconds for Notifications, default 60 seconds
  window['env']['waitTimeForNotifications'] = 60;

  // Time in seconds for COB Catch-Up, default 30 seconds
  window['env']['waitTimeForCOBCatchUp'] = 30;

  // Time in milliseconds for Session idle timeout, default 300000 seconds
  window['env']['sessionIdleTimeout'] = 300000;

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
