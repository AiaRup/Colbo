import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import { ListItem, AppText } from "../components";
import colors from "../config/colors";

export const ListDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        style={{ flex: 1 }}
      >
        <Image
          style={styles.image}
          preview={{ uri: "" }}
          tint="light"
          uri={""}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
