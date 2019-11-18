import React, { useState } from "react";
import { FlatList, Text, Button, View } from "react-native";
import axios from "axios";

// Usado para teste
const FACEBOOK = "https://facebook.github.io/react-native/movies.json";

// DEVE SER CONFIGURADO CORS (conteúdo disponível publicamente)
const S3REGION = "https://s3.amazonaws.com";
const BUCKET = "com.github.kyriosdata.medicamentos";
const OBJECT = "dados.json";
const URL = `${S3REGION}/${BUCKET}/${OBJECT}`;

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState();

  const trata = response => {
    console.log("recebendo...");
    setDataSource(response.data);
    setLoading(false);
  };

  const error = error => {
    console.error(error);
  };

  function getRemoteData() {
    console.log(URL);
    return axios
      .get(URL)
      .then(trata)
      .catch(error);
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Button title="(re)load" onPress={getRemoteData} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Button title="(re)load" onPress={getRemoteData} />
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <Text>
            {item.id}, {item.denominacao}
          </Text>
        )}
        keyExtractor={({ id }, index) => id}
      />
    </View>
  );
}
