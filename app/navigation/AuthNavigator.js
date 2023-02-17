import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen, LoginScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

export default AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);
