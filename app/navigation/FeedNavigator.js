import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ListsScreen, ListDetailsScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTS} component={ListsScreen} />
    <Stack.Screen name={routes.LIST_DETAILS} component={ListDetailsScreen} />
  </Stack.Navigator>
);
