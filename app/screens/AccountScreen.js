import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getAuth, signOut } from "firebase/auth";

import { ListItem, Screen, Icon, ListItemSeperator } from "../components";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { useAuthentication } from "../hooks/useAuthentication";

const menuItems = [
  {
    title: "הרשימות שלי",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.LISTING,
  },
];
export const AccountScreen = ({ navigation }) => {
  const { user } = useAuthentication();
  const auth = getAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={"aia"} subTitle={user?.email} avatar={"aia"} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(manuItem) => manuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => signOut(auth)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
