import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
  </Stack.Navigator>
);
