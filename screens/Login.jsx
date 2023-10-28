import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../constants/colors";
import { Input, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { signIn } from "../services/AuthenticationService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {
  const [iconName, setIconName] = useState("eye-slash");
  const [emailData, setEmailData] = useState({
    email: "",
    password: "",
  });
  const { width, height } = useWindowDimensions();
  const [user, setUser] = useState({});

  const handleSubmit = () => {
    try {
      signIn(user).then((res) => {
        storeData(res.data.user);
        props.navigation.navigate("Index", {
          email: user.email,
        });
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-user', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handlePassowrdIcon = () => {
    if (iconName === "eye-slash") {
      setIconName("eye");
    } else {
      setIconName("eye-slash");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[LoginStyles.mainContainer, { width: width, height: height }]}
        >
          <View style={LoginStyles.body}>
            <Text
              style={[
                LoginStyles.header,
                {
                  fontSize: width < 800 ? 24 : 28,
                },
              ]}
            >
              ¡Bienvenido!
            </Text>
            <View
              style={
                LoginStyles.inputs
              }
            >
              <Input placeholder="Ingresa correo electrónico" onChangeText={(e) => setUser({ ...user, email: e })} />
              <Input
                onChangeText={(e) => setUser({ ...user, password: e })}
                placeholder="Contraseña"
                secureTextEntry={iconName === "eye-slash"}
                rightIcon={
                  <Icon
                    name={iconName}
                    type="font-awesome"
                    onPress={handlePassowrdIcon}
                  />
                }
              />
              <View style={LoginStyles.buttonContainer}>
                <Pressable onPress={() => handleSubmit()}>
                  <LinearGradient
                    colors={[colors.PRIMARY, colors.PRIMARY]}
                    start={[0, 0]}
                    end={[1, 1]}
                    location={[0.25, 1]}
                    style={LoginStyles.button}
                  >
                    <Text style={LoginStyles.buttonText}>Inicia sesión</Text>
                  </LinearGradient>
                </Pressable>
              </View>
              <View style={LoginStyles.registerContainer}>
                <Text>¿Todavía no estás registrado?</Text>
                <Pressable
                  onPress={() => {
                    props.navigation.navigate("Register");
                  }}
                >
                  <Text style={{ color: colors.PRIMARY }}>Regístrate</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const LoginStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 32,
  },
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 80,
  },
  header: {
    fontWeight: "800",
    color: colors.PRIMARY,
  },
  inputs: {
    display: "flex",
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    gap: 40,
  },
  buttonContainer: {
    width: "100%",
    padding: 24,
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: "100%",
    height: 48,
    color: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.SECONDARY,
    textAlign: "center",
  },
  registerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
});
