import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MedicamentoItem(props) {
  
  const medicamento = props.medicamento;
 
  function selecionado(props, item) {    
    props.navigation.navigate({
      routeName: 'Medicamento',
      params: { medicamento: item },
    });
  }

  return (
    <TouchableOpacity onPress={() => selecionado(props, medicamento)}>
      <View style={styles.item}>
        <Text style={styles.denominacao}>{medicamento.denominacao}</Text>
        <Text>{medicamento.concentracao}</Text>
        <Text>{medicamento.forma}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
  },

  denominacao: {
    fontSize: 16
  },
});
