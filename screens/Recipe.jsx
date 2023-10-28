import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Recipe = (props) => {
  return (
    <SafeAreaView style={recipeStyles.safeArea}>
      <View style={recipeStyles.container}>
        <Text style={recipeStyles.title}>Título de la Receta</Text>
        <View style={recipeStyles.infoContainer}>
          <View style={recipeStyles.nutritionInfo}>
            <View style={recipeStyles.infoItem}>
              <Text style={recipeStyles.infoValue}>250</Text>
              <Text style={recipeStyles.infoName}>Calorías</Text>
            </View>
            <View style={recipeStyles.infoItem}>
              <Text style={recipeStyles.infoValue}>10g</Text>
              <Text style={recipeStyles.infoName}>Proteínas</Text>
            </View>
            <View style={recipeStyles.infoItem}>
              <Text style={recipeStyles.infoValue}>30g</Text>
              <Text style={recipeStyles.infoName}>Carbohidratos</Text>
            </View>
            <View style={recipeStyles.infoItem}>
              <Text style={recipeStyles.infoValue}>1</Text>
              <Text style={recipeStyles.infoName}>Porción</Text>
            </View>
          </View>
        </View>
        <View style={recipeStyles.timeAndCost}>
          <Text style={recipeStyles.boldText}>Tiempo estimado: 30 minutos</Text>
        </View>
        <View style={recipeStyles.timeAndCost}>
          <Text style={recipeStyles.boldText}>Costo promedio: $10</Text>
        </View>
        <Text style={recipeStyles.recipeText}>
          Esta es la descripción de la receta. Aquí puedes incluir instrucciones
          y detalles sobre cómo preparar la receta.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const recipeStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
},
  nutritionInfo: {
    flexDirection: "row",
  },
  infoItem: {
    flex: 1,
    alignItems: "center",
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoName: {
    marginTop: 4,
    fontSize: 12,
  },
  timeAndCost: {
    marginTop: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  recipeText: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default Recipe;
