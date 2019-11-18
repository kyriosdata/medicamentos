import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify, { Storage } from "aws-amplify";
import axios from "axios";

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:0cf6fee6-e85a-46bc-a413-b33f398c118e",
    region: "us-east-1"
  },
  Storage: {
    AWSS3: {
      bucket: "br.ufg.inf.medicamentos",
      region: "sa-east-1"
    }
  }
});

const error = error => console.error(error);

export default function App() {
  const [inicializado, setInicializado] = useState(false);
  const [medicamentos, setMedicamentos] = useState(null);

  const trata = response => {
    console.log("recebendo...");
    setMedicamentos(response.data);
    console.log(response.data.length);
  };

  function getRemoteData(url) {
    return axios
      .get(url)
      .then(trata)
      .catch(error);
  }

  if (inicializado) {
    return (
      <View style={styles.container}>
        <Text>AWS</Text>
      </View>
    );
  }

  Storage.get("dados.json")
    .then(url => {
      console.log(url);
      getRemoteData(url);
    })
    .then(x => setInicializado(true))
    .catch(err => console.log("ocorreu um erro " + err));

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
