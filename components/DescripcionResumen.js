import { StyleSheet, Text, View, Pressable } from "react-native";
import { Icon } from "@rneui/themed";

import React from "react";

const DescripcionResumen = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.principalText}>Recetas encontradas</Text>
        <Text style={styles.secondaryText}>Recetas generadas para {props.numDias ? `${props.numDias} ${props.numDias > 1 ? "días" : "día"}` : "1 día"}</Text>
    </View>
  );
};

export default DescripcionResumen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 18,
        width: "100%",
        gap: 10,
    },
    principalText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    secondaryText: {
        fontSize: 14,
        color: "#71727A",
    },
    icon: {
        size: "100",
    },
});
