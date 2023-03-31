import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, Screen } from "../components";
import { useCategories } from "../hooks/useCategories";
import { useAuthentication } from "../hooks/useAuthentication";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
});

export const EditListScreen = () => {
  const { user } = useAuthentication();
  const { categories } = useCategories();
  const [items, setItems] = useState([]);

  const handleSearch = async (listing, { resetForm }) => {
    // TODO: search DB for item
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          item_name: "",
        }}
        onSubmit={() => console.log("submit")}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="item_name"
          placeholder="חיפוש מוצר"
          icon="magnify"
        />
      </AppForm>

      <FlatList
        data={categories}
        style={styles.categoriesContainer}
        keyExtractor={(category) => category.id}
        numColumns={2}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.category}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  categoriesContainer: {
    marginTop: 30,
  },
  category: {
    flexBasis: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
  },
});
