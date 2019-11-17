import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify, { Storage } from "aws-amplify";
import axios from "axios";

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:187ac862-fb82-45e9-bad0-5fe6468278f3",
    region: "us-east-1"
  },
  Storage: {
    AWSS3: {
      bucket: "com.github.kyriosdata.medicamentos"
    }
  }
});

const trata = response => {
  console.log("recebendo...");
  console.log(response.data);
};

const error = error => console.error(error);

function getRemoteData(url) {
  return axios
    .get(url)
    .then(trata)
    .catch(error);
}

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
    .then(url => {
      console.log(url);
      getRemoteData(url);
    })
    .then(x => setInicializado(true))
    .catch(err => console.log("ocorreu um erro"));

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
