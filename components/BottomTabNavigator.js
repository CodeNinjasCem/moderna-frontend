import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inicio, PlanSemanal, Escanear } from "../screens";
import BottomTabCustom from "./BottomTabCustom";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
        inactiveTintColor: "gray",
      }}
      tabBar={(props) => <BottomTabCustom {...props} />}
    >
      <Tab.Screen name="Inicio" component={Inicio} 
        options={{
            iconName: "home",
        }}
      />
      <Tab.Screen name="Escanear" component={Escanear} 
        options={{
            iconName: "scanner",
        }}
      />
      <Tab.Screen name="Plan Semanal" component={PlanSemanal} 
        options={{
            iconName: "backup-table",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
