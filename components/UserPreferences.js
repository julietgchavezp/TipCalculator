
import { Switch, View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserPreferences() {
  const [nombre, setNombre] = useState("");
  const [onlyWifi, setOnlyWifi] = useState(false);

  function nameInputHandler(enteredValue) {
    setNombre(enteredValue);
    console.log(nombre);
  }

  function onlyWifiHandler() {
    setOnlyWifi(previousState => !previousState);
    console.log(onlyWifi);
  }

  function saveHandler() {
    AsyncStorage.setItem("nombre", nombre);
    const jsonOnlyWifi = JSON.stringify(onlyWifi);
    AsyncStorage.setItem("onlyWifi", jsonOnlyWifi);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre a mostrar:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={nameInputHandler}
            placeholder="Ingresa tu nombre"
          />
        </View>

        <View style={styles.row}>
          {/* <Text style={styles.text} >Tema:</Text>*/}
          {/* Radio Buttons */}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Solo wifi?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={onlyWifi ? "#f5dd4b" : "#f4f3f4"}
            value={onlyWifi}
            onValueChange={onlyWifiHandler}
          />
        </View>

        <Button title="GUARDAR" onPress={saveHandler} style={styles.button} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  innerContainer: {
    backgroundColor: "#cccccc",
    borderRadius: 8,
    padding: 24,
    margin: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center", 
    marginBottom: 16,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 40,
    borderColor: "white",
    paddingLeft: 8,
    color: "black",
    
  },
  button: {
    marginTop: 16,
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: 8,
  },
});
