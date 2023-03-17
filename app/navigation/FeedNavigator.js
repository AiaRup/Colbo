import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";

import { ListsScreen, ListDetailsScreen } from "../screens";
import routes from "./routes";
import { transformDateToString } from "../utility/dates";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator presentation="modal">
    <Stack.Screen name={routes.LISTS} component={ListsScreen} />
    <Stack.Screen
      name={routes.LIST_DETAILS}
      component={ListDetailsScreen}
      options={({ route }) => ({
        headerTitle: () => (
          <Text style={styles.title}>{`${
            route.params?.location
          } - ${transformDateToString(route.params?.date)}`}</Text>
        ),
      })}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
