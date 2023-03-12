import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, Screen } from "../components";
import { useCategories } from "../hooks/useCategories";
import { useAuthentication } from "../hooks/useAuthentication";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
});

export const EditListScreen = () => {
  const { user } = useAuthentication();
  const { categories } = useCategories();
  const [items, setItems] = useState([]);

  console.log("categories", categories);

  const handleSearch = async (listing, { resetForm }) => {
    // TODO: serach DB for item
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          item_name: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="item_name"
          placeholder="חיפוש מוצר"
          icon="magnify"
        />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
