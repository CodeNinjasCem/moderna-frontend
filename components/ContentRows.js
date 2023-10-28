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
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "90%",
    marginLeft: 4,
  },
  text: {
    fontSize: 16,
  },
  icon: {
    size: "100",
  },
});
