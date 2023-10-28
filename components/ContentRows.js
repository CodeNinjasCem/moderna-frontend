import { StyleSheet, Text, View } from "react-native";
import { Input, Icon } from "@rneui/themed";

import React from "react";

const ContentRows = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Receta #1</Text>
      <Icon
        style={styles.icon}
        name={"angle-right"}
        type="font-awesome"
        onPress={() => console.log("hello")}
      />
    </View>
  );
};

export default ContentRows;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 65,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    marginTop: 20,
    boxShadow: "0px 7px 14px rgba(191, 191, 191, 0.25)",
  },
  text: {
    marginLeft: 30,
    fontSize: 16,
  },
  icon: {
    marginRight: 30,
    size: "100",
  },
});
