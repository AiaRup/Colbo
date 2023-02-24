import "dotenv/config";

export default {
  expo: {
    name: "Colbo",
    slug: "Colbo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./app/assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./app/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./app/assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./app/assets/favicon.png",
    },
    extra: {
      firebaseApiKey: process.env.API_KEY,
      firebaseAuthDomain: process.env.AUTH_DOMAIN,
      firebaseProjectId: process.env.PROJECT_ID,
      firebaseStorageBucket: process.env.STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.SENDER_ID,
      firebaseAppId: process.env.APP_ID,
      databaseURL: process.env.DATABASE_URL,
    },
  },
};
