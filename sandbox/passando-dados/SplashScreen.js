import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Simula splash screen.
 */
export default function SplashScreen(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Consulta Medicamentos</Text>
      <Text style={styles.msg}>Imagem a ser exibida enquanto o aplicativo é iniciado.</Text>
      <Button
        title="Vá para a tela principal"
        onPress={() => {
          props.callQuandoConcluido();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  }, 

  titulo: {
    fontSize: 22,
    color: 'lightblue',
    margin: 15,
  },

  msg : {
    fontSize: 20,
    color: 'red',
    margin: 22,
    textAlign: 'center',
  }
});
