import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  ErrorMessage,
  Screen,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .max(20, "Password is too long - should be 20 chars maximum.")
    .matches(
      /^(?=.*?[0-9])(?=.*[A-Z]).{6,20}$/,
      "Password needs to have at least one uppercase letter and one number."
    )
    .label("Password"),
});

export const LoginScreen = () => {
  const [loginFailed, setLoginFailded] = useState(false);
  const auth = getAuth();

  const handleSubmit = async ({ email, password }) => {
    setLoginFailded(false);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoginFailded(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={"הנתונים שהוזנו אינם נכונים"}
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="אימייל"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="סיסמא"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="כניסה" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
