import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { OfflineNotice } from "./app/components";
import { navigationRef } from "./app/navigation/RootNavigation";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(true);
  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  // if (!appIsReady)
  //   return (
  //     <View
  //       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  //       onLayout={onLayoutRootView}
  //     >
  //       <Text>SplashScreen Demo! 👋</Text>
  //       <Entypo name="rocket" size={30} />
  //     </View>
  //   );

  return (
    <>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
