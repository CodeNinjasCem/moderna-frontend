import { StyleSheet, Text, View, Image } from "react-native";
import { Input, Icon } from "@rneui/themed";

import React from "react";

const ImageBlock = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/LAMODERNA1.jpg")}
        />
        <Text style={styles.text}>Producto #1</Text>
    </View>
  );
};

export default ImageBlock;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
