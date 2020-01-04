import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  SafeAreaView
} from "react-native";

async function download(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "text";
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.status, this.responseText);
    }
  };
  xhr.send();
}

export default function App() {
  const [conteudo, setConteudo] = useState([{ id: "1", denominacao: "ok" }]);

  function feedback(codigo, dados) {
    const medicamentos = JSON.parse(dados);
    console.log(medicamentos.length);
    console.log(medicamentos[0]);
    setConteudo(medicamentos);
  }

  function baixeArquivo() {
    console.log("baixeArquivo");
    download("https://kyriosdata.github.io/medicamentos/dados.json", feedback);
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <Button title="Requisite download..." onPress={baixeArquivo} />
      </View>
      <View style={styles.saida}>
        <FlatList
          data={conteudo}
          renderItem={itemData => <Text>{itemData.item.denominacao}</Text>}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  entrada: {
    marginTop: 40
  },

  saida: {
    flex: 1,
    width: "90%",
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "red"
  }
});
