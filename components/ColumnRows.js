import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Input, Icon } from "@rneui/themed";
import ContentRows from "../components/ContentRows";

import React from "react";

const ColumnRows = () => {
  return (
    <ScrollView
    horizontal={false}
    style={styles.scrollView}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.container}>
      {/* Cambiar por un map */}
      <ContentRows />
      <ContentRows />
      <ContentRows />
      <ContentRows />
    </View>
  </ScrollView>
  );
};

export default ColumnRows;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
