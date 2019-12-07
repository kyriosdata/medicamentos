import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIAWE3JTWAI5DFZAJR4",
  secretAccessKey: "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"
});

export default function App() {
  const [dados, setDados] = useState();

  function download() {
    var s3 = new AWS.S3();
    s3.getObject(
      {
        Bucket: "medicamentostest-test",
        Key: "dados.json"
      },
      function(error, data) {
        if (error != null) {
          alert("Failed to retrieve an object: " + error);
        } else {
          console.log("Loaded " + data.ContentLength + " bytes");
          setDados(JSON.parse(data.Body));
        }
      }
    );
  }

  if (dados) {
    return (
      <View>
        <Text>{dados[0].denominacao}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="download" onPress={download} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#fff"
  }
});
