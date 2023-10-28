import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Cuenta = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.bannerContainer}>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.accountName}>Usuario ejemplo</Text>
          <Text style={styles.accountMail}>correo@ejemplo.com</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>1,230 PUNTOS</Text>
        </View>
      </View>
      <View style={styles.moreInfoContainer}>
        <View style={styles.moreInfoElement}>
          <Text style={styles.moreInfoTitle}>Genero</Text>
          <Text style={styles.moreInfoDescription}>Masculino</Text>
        </View>
        <View style={styles.moreInfoElement}>
          <Text style={styles.moreInfoTitle}>Fecha de nacimiento</Text>
          <Text style={styles.moreInfoDescription}>12/09/2002</Text>
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
