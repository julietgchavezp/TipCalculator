import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function ContributionCalculator({ route }) {
  const { amountPerPerson } = route.params;
  const [peoplePaying, setPeoplePaying] = useState('');
  const [aporte, setAporte] = useState('');
  const [total, setTotal] = useState(0);
  const [cambio, setCambio] = useState(0);

  const handlePeopleChange = (text) => {
    setPeoplePaying(text);
  };

  const handleAporteChange = (text) => {
    setAporte(text);
  };

  const handleCalcular = () => {
    const parsedPeople = parseInt(peoplePaying) || 0;
    const calculatedTotal = amountPerPerson * parsedPeople;
    setTotal(calculatedTotal);

    const cambioResult = parseFloat(aporte) - calculatedTotal || 0;
    setCambio(cambioResult);
  };

  const handleLimpiar = () => {
    setPeoplePaying('');
    setAporte('');
    setTotal(0);
    setCambio(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.entrycontainer}>
        <Text style={styles.label1}>DE LOS N COMENSALES</Text>
        <Text style={styles.result1}>Importe por Persona: ${amountPerPerson.toFixed(2)}</Text>
        <Text style={styles.label}>Yo pago por:</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de personas"
          keyboardType="numeric"
          value={peoplePaying}
          onChangeText={handlePeopleChange}
        />
        <Text style={styles.label}>Aporto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Cantidad a aportar"
          keyboardType="numeric"
          value={aporte}
          onChangeText={handleAporteChange}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Calcular" onPress={handleCalcular} />
        <Button title="Limpiar" onPress={handleLimpiar} />

      </View> 
      <View style={styles.retotalcontainer}>
        <Text style={styles.result}>Mi Total es: ${total.toFixed(2)}</Text>
        <Text style={styles.result}>Mi Cambio es: ${cambio.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  entrycontainer: {
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    marginTop: 8,
    padding: 10,
    borderWidth: 3,
    borderRadius: 16,
  },
  retotalcontainer: {
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    marginTop: 8,
    padding: 10,
    borderWidth: 3,
    borderRadius: 16,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    padding: 10,
  },
  input: {
    width: '100',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    fontSize: 15,
  },
  result1: {
    width: '100%',
    fontSize: 18,
    marginTop: 8,
    padding: 10,
    borderRadius: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  result: {
    width: '100%',
    fontSize: 16,
    marginTop: 8,
    padding: 1,
    borderRadius: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  LIMPIAR: {
    padding: 15,
    borderRadius: 8,
  },
  label1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
});
