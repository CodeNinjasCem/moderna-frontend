import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from "../constants/colors";
import DescripcionResumen from '../components/DescripcionResumen';
import ContentRows from '../components/ContentRows';

const PlanSemanalResultado = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Plan semanal</Text>
      <DescripcionResumen />
      <View style={styles.squareContent}>
        <Text style={styles.squareTitle}>Lunes</Text>
        <ContentRows navigation={props.navigation} />
      </ View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
