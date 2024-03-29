import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

// Eficiência apenas (recomendado)
useScreens();

import Navegador from "./Navegador";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans-light": require("./assets/OpenSans-Light.ttf"),
    "open-sans-regular": require("./assets/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/OpenSans-Bold.ttf")
  });
};

export default function App(props) {
  const [autorizado, defineAutorizado] = useState(false);
  const [fontNotLoaded, setFontNotLoaded] = useState(true);

  const concluido = () => {
    defineAutorizado(true);
  };

  if (fontNotLoaded) {
    console.log("carregando fontes...");
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontNotLoaded(false)}
        onError={console.warn}
      />
    );
  } else {
    return <Navegador />;
  }
}
