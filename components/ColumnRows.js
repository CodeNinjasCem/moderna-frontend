import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Input, Icon } from "@rneui/themed";
import ContentRows from "../components/ContentRows";

import React from "react";

const ColumnRows = (props) => {
  const data = props.data || [];
  return (
    <ScrollView
    horizontal={false}
    style={styles.scrollView}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.container}>
      {
        data.map((item, index) => {
          return <ContentRows key={index} navigation={props.navigation} data={item} />
        })
      }
    </View>
  </ScrollView>
  );
};

export default ColumnRows;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
});
