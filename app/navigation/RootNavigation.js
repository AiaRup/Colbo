import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuthentication } from "../hooks/useAuthentication";
import navigationTheme from "./navigationTheme";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { navigationRef } from "./RootNavigationRef";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
