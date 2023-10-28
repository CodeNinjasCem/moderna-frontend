import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ClasificadoComponent from "../components/ClasificadoComponent";
import ColumnRows from "../components/ColumnRows";
import React from "react";
import colors from "../constants/colors";
import DescripcionResumen from "../components/DescripcionResumen";

const ListaReceta = (props) => {
  const { image, producto, recetas } = props.route.params.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={
        {
          height: "100%",
          marginTop: 24,
          gap: 12,
          padding: image ? 0 : 24,
        }
      }>
        {image ? (
          <ClasificadoComponent image={image} producto={producto} />
        ) : (
          <DescripcionResumen />
        )}
        <View style={styles.dataContainer}>
          <Text style={styles.headerRecetas}>Seleccione una receta</Text>
          <ColumnRows navigation={props.navigation} data={recetas}/>
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
