import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { Input, Icon, CheckBox } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { signUp } from "../services/AuthenticationService";

export default function Register(props) {
  const [iconName, setIconName] = useState("eye-slash");
  const [iconConfirmName, setIconConfirmName] = useState("eye-slash");
  const { width, height } = useWindowDimensions();
  const [user, setUser] = useState({});

  const handleSubmit = () => {
    signUp(user).then((res) => {
      props.navigation.navigate("VerifyCode", {
        email: user.email,
      });
    });
  };

  const handlePassowrdIcon = () => {
    if (iconName === "eye-slash") {
      setIconName("eye");
    } else {
      setIconName("eye-slash");
    }
  };

  const handleConfirmPassowrdIcon = () => {
    if (iconConfirmName === "eye-slash") {
      setIconConfirmName("eye");
    } else {
      setIconConfirmName("eye-slash");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            registerStyles.mainContainer,
            {
              width: width,
              height: height,
            },
          ]}
        >
          <View
            style={[
              registerStyles.bodyContainer,
              {
                gap: width < 800 ? 32 : 64,
                padding: width < 800 ? 16 : 32,
              },
            ]}
          >
            <View style={registerStyles.headerContainer}>
              <Text
                style={[
                  registerStyles.header,
                  {
                    fontSize: width < 800 ? 24 : 32,
                  },
                ]}
              >
                Registrate
              </Text>
              <Text
                style={[
                  registerStyles.subHeader,
                  {
                    fontSize: width < 800 ? 16 : 14,
                  },
                ]}
              >
                Crea una cuenta para iniciar
              </Text>
            </View>
            <View
              style={[
                registerStyles.inputs,
                {
                  gap: width < 800 ? 16 : 32,
                },
              ]}
            >
              <View style={registerStyles.input}>
                <Text style={registerStyles.inputTitle}>Nombre</Text>
                <Input
                  placeholder="Karla"
                  onChangeText={(e) => setUser({ ...user, firstName: e })}
                />
              </View>

              <View style={registerStyles.input}>
                <Text style={registerStyles.inputTitle}>Apellido</Text>
                <Input
                  placeholder="Santillan"
                  onChangeText={(e) => setUser({ ...user, lastName: e })}
                />
              </View>

              <View style={registerStyles.input}>
                <Text style={registerStyles.inputTitle}>Correo</Text>
                <Input
                  placeholder="karla.santillan@lamoderna.com.mx"
                  onChangeText={(e) => setUser({ ...user, email: e })}
                />
              </View>

              {/* Add a checkbox for gender */}
              <View style={registerStyles.input}>
                <Text style={registerStyles.inputTitle}>Genero</Text>
                <Input
                  placeholder="Femenino"
                  onChangeText={(e) => setUser({ ...user, gender: e })}
                />
              </View>

              <View style={registerStyles.input}>
                <Text style={registerStyles.inputTitle}>Contraseña</Text>
                <Input
                  placeholder="Crea una contraseña"
                  secureTextEntry={iconName === "eye-slash"}
                  onChangeText={(e) => setUser({ ...user, password: e })}
                  rightIcon={
                    <Icon
                      name={iconName}
                      type="font-awesome"
                      onPress={handlePassowrdIcon}
                    />
                  }
                />
              </View>

              <View style={registerStyles.buttonContainer}>
                <Pressable onPress={() => handleSubmit()}>
                  <LinearGradient
                    colors={[colors.PRIMARY, colors.PRIMARY]}
                    start={[0, 0]}
                    end={[1, 1]}
                    location={[0.25, 1]}
                    style={registerStyles.button}
                  >
                    <Text style={registerStyles.buttonText}>Registrarme</Text>
                  </LinearGradient>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const registerStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  bodyContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerContainer: {
    width: "80%",
    display: "flex",
    gap: 8,
    marginRight: "auto",
    marginLeft: 20,
  },
  header: {
    fontWeight: "800",
    color: colors.PRIMARY,
    marginRight: "auto",
  },
  subHeader: {
    color: colors.LIGHT_GRAY,
  },
  inputs: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  inputTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "black",
  },
  buttonContainer: {
    width: "100%",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 16,
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
    color: "white",
    textAlign: "center",
  },
});
