import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ClasificadoComponent from "../components/ClasificadoComponent";
import React from "react";

const ListaReceta = (props) => {
    const image = props.route.params.params.image;
  return (
    <SafeAreaView>
        {
        image ? <ClasificadoComponent image={image} /> : <Text>Plan Semanal Dia seleccionado</Text>
        }
      <View>
        <Text>ListaReceta</Text>
      </View>
    </SafeAreaView>
  );
};

export default ListaReceta;

const styles = StyleSheet.create({});
