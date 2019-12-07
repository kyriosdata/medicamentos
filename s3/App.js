import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import AWS from "aws-sdk";

/**
 * Deve-se configurar AWS
 * (a) usuário "medicamentos.frontend" (credencial abaixo)
 * (b) criar política de acesso veja https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/
 *     (apenas permissão getObject no bucket medicamentos.frontend)
 * (c) associar política criada ao usuário criado.
 * (d) configurar CORS
 */

AWS.config.update({
  accessKeyId: "AKIAWE3JTWAI4NEGMOPF",
  secretAccessKey: "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"
});

export default function App() {
  const [dados, setDados] = useState();

  function download() {
    var s3 = new AWS.S3();
    s3.getObject(
      {
        Bucket: "medicamentos.frontend",
        Key: "dados.json"
      },
      function(error, data) {
        if (error != null) {
          alert("Failed to retrieve an object: " + error);
        } else {
          const carregado = JSON.parse(data.Body);
          console.log("total de objetos: " + carregado.length);
          setDados(carregado);
        }
      }
    );
  }

  function clear() {
    setDados();
  }

  function exibe(medicamento) {
    return (
      <View>
        <Text>
          {medicamento.id}, {medicamento.denominacao},{" "}
          {medicamento.concentracao}, {medicamento.forma}, {medicamento.atc},{" "}
          {medicamento.componente}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Button title="download" onPress={() => download()} />
        <Button title="clear" onPress={() => clear()} />
      </View>
      <FlatList
        data={dados}
        renderItem={item => exibe(item.item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },

  botao: {
    flexDirection: "row"
  }
});
