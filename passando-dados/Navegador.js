import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen, { navigationOptions } from './HomeScreen';
import FavoritosScreen from './FavoritosScreen';
import MedicamentoScreen from './MedicamentoScreen';

const Navegador = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigationOptions,
  },
  Medicamento: MedicamentoScreen,
  Favoritos: FavoritosScreen,
});

export default createAppContainer(Navegador);
