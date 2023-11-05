import "dotenv/config";

export default {
  "expo": {
    "name": "Rate_Repositories",
    "owner": "djblackett",
    "slug": "rate-repositories",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "jsEngine": "hermes",
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    android: {
      package: "rate_repository-djblackett.a1",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: { env: process.env.ENV,
      apolloUri: process.env.APOLLO_URI,
      "eas": {
        "projectId": "69abf416-e9de-49af-b0a7-0ab91e69b518"
      },
      android: {
        package: "rate_repository-djblackett.a1"
      }
    },

  },
  android: {
    package: "rate_repository-djblackett.a1"
  }
};
