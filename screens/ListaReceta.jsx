import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ClasificadoComponent from "../components/ClasificadoComponent";
import ColumnRows from "../components/ColumnRows";
import React from "react";
import colors from "../constants/colors";

const ListaReceta = (props) => {
  const { image, producto } = props.route.params.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={
        {
          height: "100%",
          marginTop: 24,
          gap: 12,
        }
      }>
        {image ? (
          <ClasificadoComponent image={image} producto={producto} />
        ) : (
          <Text>Plan Semanal Dia seleccionado</Text>
        )}
        <View style={styles.dataContainer}>
          <Text style={styles.headerRecetas}>Seleccione una receta</Text>
          <ColumnRows />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListaReceta;

const styles = StyleSheet.create({
  dataContainer: {
    gap: 24,
    paddingVertical: 24,
    paddingHorizontal: 12,
    height: "100%",
  },
  headerRecetas: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
});
