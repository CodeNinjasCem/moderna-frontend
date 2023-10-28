import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, {useState, useEffect} from "react";

import colors from "../constants/colors";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cuenta = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-user');
        if (jsonValue != null) {
          setUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();

  }
  ,[]);

  const handleCerrarSesion = () => {
    try {
      AsyncStorage.removeItem('my-user');
      props.navigation.navigate("Login");
    } catch (e) {
      // saving error
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.bannerContainer}>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.accountName}>{user.first_name + " " + user.last_name}</Text>
          <Text style={styles.accountMail}>{user.email}</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{user.points} PUNTOS</Text>
        </View>
      </View>
      <View style={styles.moreInfoContainer}>
        <View style={styles.moreInfoElement}>
          <Text style={styles.moreInfoTitle}>Género</Text>
          <Text style={styles.moreInfoDescription}>{user.gender}</Text>
        </View>
        <View style={styles.moreInfoElement}>
          <Text style={styles.moreInfoTitle}>Fecha de nacimiento</Text>
          <Text style={styles.moreInfoDescription}>12/09/1989</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonElement} onPress={
            () => props.navigation.navigate("Inicio")
          }>
            <Text style={styles.buttonText}>Cerrar sesión</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cuenta;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.PRIMARY,
  },
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 24,
    height: "28%",
    backgroundColor: colors.PRIMARY,
  },
  accountName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.SECONDARY,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  pointsText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  moreInfoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "white",
    width: "100%",
    height: "80%",
  },
  moreInfoElement: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    marginRight: "auto",
    height: 100,
    width: "100%",
  },
  moreInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 300,
  },
  buttonElement: {
    width: "50%",
    alignSelf: "center",
    backgroundColor: colors.PRIMARY,
    color: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
});
