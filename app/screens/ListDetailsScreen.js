import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  FlatList,
} from "react-native";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";

import colors from "../config/colors";
import { useList } from "../hooks/useList";
import { ListItemSeperator } from "../components";

export const ListDetailsScreen = ({ route, navigation }) => {
  const list = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [navigation]);

  const { items, progress } = useList({ list_id: list?.id });

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        style={styles.keyboard}
      >
        <Progress.Bar
          color={colors.primary}
          progress={progress}
          width={300}
          style={styles.progress}
        />
        {items && items.length ? (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.item}>{item.product_id}</Text>
                <Checkbox
                  color={item.completed ? colors.primary : undefined}
                  value={item.completed}
                  onValueChange={(newValue) => console.log(newValue)}
                  style={styles.checkbox}
                />
              </View>
            )}
          />
        ) : (
          <Text style={styles.empty}>הרשימה ריקה</Text>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
  progress: {
    marginVertical: 30,
    alignSelf: "center",
  },
  empty: {
    fontWeight: "bold",
    paddingTop: 100,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  checkbox: {
    margin: 8,
    borderRadius: 4,
  },
  seperator: {
    width: "100%",
    height: 0.6,
    backgroundColor: colors.border,
  },
});
