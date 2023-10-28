import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {
  OnBoarding,
  Login,
  Register,
  VerifyCode,
  ListaReceta,
  Cuenta,
  PlanSemanalResultado,
  Recipe,
} from "./screens";
import React, { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async (props) => {
      try {
        const jsonValue = await AsyncStorage.getItem("my-user");
        if (jsonValue != null) {
          setUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= {user ? "Index" : "OnBoarding"}>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyCode"
          component={VerifyCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Index"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListaReceta"
          component={ListaReceta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Cuenta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlanSemanalResultado"
          component={PlanSemanalResultado}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
