import React from "react";
import { I18nManager } from "react-native";

import "./app/config/firebase";
import { OfflineNotice } from "./app/components";
import RootNavigation from "./app/navigation/RootNavigation";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function App() {
  return (
    <>
      <OfflineNotice />
      <RootNavigation />
    </>
  );
}
