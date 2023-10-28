import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "../constants/colors";
import DescripcionResumen from "../components/DescripcionResumen";
import ContentRows from "../components/ContentRows";

const PlanSemanalResultado = (props) => {
  const { numDias, plan } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Plan semanal</Text>
      <DescripcionResumen numDias={numDias} />
      <ScrollView style={{ height: 300 }} showsVerticalScrollIndicator={false}>
        {plan.map((recipes, index) => {
          data = {recipe_name: `Se generaron ${recipes.length} recetas`}
          return (
          <View key={index} style={styles.squareContent}>
            <Text style={styles.squareTitle}>Día {index + 1}</Text>
            <ContentRows navigation={props.navigation} data={data} recipes={recipes}/>
          </View>);
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginVertical: 8,
    paddingTop: 16,
  },
  squareContent: {
    padding: 12,
  },
  squareTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.SECONDARY,
    paddingBottom: 12,
  },
});

export default PlanSemanalResultado;
