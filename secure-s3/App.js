import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Storage } from "aws-amplify";

export default function App() {
  const [inicializado, setInicializado] = useState(false);
  const [medicamentos, setMedicamentos] = useState(null);

  if (inicializado) {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }

  Storage.get("dados.json")
    .then(data => setMedicamentos(data))
    .then(x => setInicializado(true))
    .catch(err => console.log("ocorreu um erro"));
  
  return (
    <View><Text>Loading...</Text></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
