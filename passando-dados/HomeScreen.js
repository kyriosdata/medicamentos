import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import { MEDICAMENTOS } from './assets/dados';
import MedicamentoItem from './MedicamentoItem';

/**
 * Função que retorna lista de tópicos localizáveis no aplicativo.
 *
 * @param {string} texto Sequência a ser empregada na busca.
 */
function realizaBusca(texto) {
  console.log('realizaBusca: ' + texto);
  return MEDICAMENTOS.filter(m => m.denominacao.includes(texto));
}

export function navigationOptions({ navigation }) {
  console.log('navigationOptions');
  const funcao = navigation.getParam('atualiza');
  return {
    headerTitle: (
      <TextInput
        style={styles.search}
        placeholder="medicamento..."
        onChangeText={texto => {
          const filtrados = realizaBusca(texto);
          navigation.getParam('atualiza')(filtrados);
        }}
      />
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-search"
          onPress={() => console.log('busca requisitada')}
        />
        <Item
          title="Favorite"
          iconName="ios-menu"
          onPress={() => navigation.navigate('Favoritos')}
        />
      </HeaderButtons>
    ),
  };
}

let counter = 0;

export default function HomeScreen(props) {
  const [filtrados, atualizaFiltrados] = useState(realizaBusca('mabe'));

  useEffect(() => {
    console.log('useEffect called...');
    props.navigation.setParams({ atualiza: atualizaFiltrados });
  }, []);

  function separador() {
    return <View style={styles.separador} />;
  }

  function exibeItem(props, item) {
    return <MedicamentoItem medicamento={item} navigation={props.navigation} />;
  }

  counter = counter + 1;
  console.log('Home screen started: ' + counter);

  return (
    <View style={styles.container}>
      <FlatList
        data={filtrados}
        renderItem={({ item }) => exibeItem(props, item)}
        ItemSeparatorComponent={separador}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  search: {
    height: 30,
    width: 150,
    borderColor: 'yellow',
    borderWidth: 1,
    alignItems: 'flex-start',
    margin: 5,
  },

  separador: {
    height: 0.5,
    width: '96%',
    backgroundColor: 'red',
    marginLeft: '2%',
  },
});
