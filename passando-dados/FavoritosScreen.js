import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritosScreen(props) {
  return (
    <View style={styles.container}>
      <Text>
        Você verá aqui a lista de medicamentos identificados como favoritos...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
