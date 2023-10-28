import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { Input, Icon } from "@rneui/themed";
import ImageBlock from "./ImageBlock";

import React from "react";

const ImageRow = () => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Cambiar por un map */}
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
      </View>
    </ScrollView>
  );
};

export default ImageRow;

const styles = StyleSheet.create({
  scrollView: {},
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    gap: 20,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
