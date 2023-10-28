import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from "../constants/colors";

const PlanSemanal = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Generar plan semanal</Text>
      </View>
      <Text style={styles.inputTitle}>Numero de integrantes</Text>
      <TextInput style={styles.input} placeholder="Ingresa número de integrantes" />

      <Text style={styles.subHeader}>Ingresa la cantidad de personas para los que deseas hacer la comida</Text>

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      <Text style={styles.subHeader}>Ingresa los ingredientes con los que cuentas para realizar la comida</Text>
      <Text style={styles.inputTitle}>Producto 1</Text>
      <TextInput style={styles.input} placeholder="Ingresa el nombre del producto" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.smallBlackButton}
          onPress={() => console.log('Botón + presionado')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => props.navigation.navigate("PlanSemanalResultado")}
        >
          <Text style={styles.buttonText}>Generar plan semanal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  headerContainer: {
    width: "80%",
    display: "flex",
    gap: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.PRIMARY,
    marginVertical: 8,
    paddingTop: 16,
  },
  subHeader: {
    color: colors.LIGHT_GRAY,
  },
  inputTitle: {
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    backgroundColor: "#F5A403",
    borderRadius: 12,
    height: 48,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  smallBlackButton: {
    backgroundColor: "black",
    borderRadius: 12,
    height: 32, // Altura más pequeña
    width: 32, 
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default PlanSemanal;
