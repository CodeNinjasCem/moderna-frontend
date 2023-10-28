import { StyleSheet, Text, View, Pressable } from "react-native";
import { Icon } from "@rneui/themed";

import React from "react";

const ContentRows = (props) => {
  return (
    <Pressable onPress={()=>
      props.navigation.navigate("Recipe", {
        params: {  },
      }
        )
    } style={styles.container}>
      <Text style={styles.text}>Receta #1</Text>
      <Icon
        style={styles.icon}
        name={"angle-right"}
        type="font-awesome"
      />
    </Pressable>
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
