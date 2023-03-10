import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import {
  ActivityIndicator,
  Screen,
  ListItem,
  ListItemDeleteAction,
  ListItemRenameAction,
} from "../components";
import colors from "../config/colors";
import { useLists } from "../hooks/useLists";
import routes from "../navigation/routes";
import { transformDateToString } from "../utility/dates";

export const ListsScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [navigation]);

  const { lists } = useLists();
  const handleDelete = (message) => {
    // TODO: delete from DB
  };
  const handleRename = (message) => {
    // TODO: rename list
  };

  return (
    <>
      <ActivityIndicator visible={false} />
      <Screen style={styles.screen}>
        {/* {error && (
          <>
            <AppText>Couldn't retrive the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )} */}
        <FlatList
          data={lists}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={transformDateToString(item.date)}
              subTitle={item.location}
              onPress={() => navigation.navigate(routes.LIST_DETAILS, item)}
              showChevrons
              renderRightActions={() => (
                <>
                  <ListItemRenameAction onPress={() => handleRename(item)} />
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                </>
              )}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
