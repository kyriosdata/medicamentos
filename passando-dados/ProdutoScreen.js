import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProdutoScreen(props) {
  console.log(props.navigation);
  return (
    <View style={styles.container}><Text>Um único produto</Text>
      <Button title='Go to products' onPress={() => { props.navigation.navigate('Produtos'); }}/>
    </View>
  );
}

ProdutoScreen.navigationOptions = {
  title: 'Um único produto',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});