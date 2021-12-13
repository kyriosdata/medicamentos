import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Tela que exibe medicamento em todos os seus detalhes.
 */
export default function MedicamentoScreen(props) {
  const medicamento = props.navigation.getParam('medicamento');

  return (
    <View style={styles.item}>
      <Text style={styles.denominacao}>{medicamento.denominacao}</Text>
      <Text>{medicamento.concentracao}</Text>
      <Text>{medicamento.forma}</Text>
      <Text>{medicamento.atc}</Text>
      <Text style={styles.faltando}>Exigências??</Text>
      <Text style={styles.faltando}>Detalhar {medicamento.componente}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
  },

  denominacao: {
    fontSize: 18,
  },

  faltando: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },

});
