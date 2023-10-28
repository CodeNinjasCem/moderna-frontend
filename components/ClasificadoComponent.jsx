import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../constants/colors";

const ClasificadoComponent = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.imageContainer}
        source={{ uri: props.image }}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.productName}>
            {props.name || "Nombre del producto"}
        </Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>
            +{props.points || "12"} ptos
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ClasificadoComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 12,
    backgroundColor: colors.PRIMARY,
    borderRadius: 16,
    width: "90%",
    alignSelf: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  bodyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 8,
    paddingVertical: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.SECONDARY,
    borderRadius: 8,
    width: 100,
    padding: 8,
  },
  pointsText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
});
