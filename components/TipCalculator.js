import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TipCalculator({ navigation }) {
  const [amount, setAmount] = useState('');
  const [people, setPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0); 

  const calculateTip = () => {
    const amountFloat = parseFloat(amount);
    const peopleInt = parseInt(people);
    const tipPercentageFloat = tipPercentage / 100;

    const calculatedTip = amountFloat * tipPercentageFloat;
    const calculatedTotal = amountFloat + calculatedTip;
    const calculatedAmountPerPerson = calculatedTotal / peopleInt;
    const calculatedTipPerPerson = calculatedTip / peopleInt; 

    setTipAmount(calculatedTip.toFixed(2));
    setTotalAmount(calculatedTotal.toFixed(2));
    setAmountPerPerson(calculatedAmountPerPerson.toFixed(2));
    setTipPerPerson(calculatedTipPerPerson.toFixed(2)); 
  };

  const handlePay = () => {
    navigation.navigate('Calculadora de Aportación', {
      tipAmount: parseFloat(tipAmount),
      totalAmount: parseFloat(totalAmount),
      amountPerPerson: parseFloat(amountPerPerson),
      tipPerPerson: parseFloat(tipPerPerson), 
    });
  };

  const clearInputs = () => {
    setAmount('');
    setPeople('');
    setTipPercentage('');
    setTipAmount(0);
    setTotalAmount(0);
    setAmountPerPerson(0);
    setTipPerPerson(0); 
  };

  return (
    <View style={styles.container}>

       <View style={styles.estruccontainer}>
      <Text style={styles.label}>Importe de la cuenta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el importe"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

      <Text style={styles.label}>Número de personas:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el número de personas"
        keyboardType="numeric"
        value={people}
        onChangeText={(text) => setPeople(text)}
      />

      <View style={styles.buttonContainer}>
        
      <Button
          title="8%"
          onPress={() => {
            setTipPercentage(8);
          }}
        />
        <Button
          title="10%"
          onPress={() => {
            setTipPercentage(10);
          }}
        />
        <Button
          title="12.5%"
          onPress={() => {
            setTipPercentage(12.5);
          }}
        />
        <Button
          title="15%"
          onPress={() => {
            setTipPercentage(15);
          }}
        />
        <Button
          title="20%"
          onPress={() => {
            setTipPercentage(20);
          }}
        />
        <Button
          title="25%"
          onPress={() => {
            setTipPercentage(25);
          }}
        />
      </View>

      <Text style={styles.label}>Propina:</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de propina"
        keyboardType="numeric"
        value={tipPercentage.toString()}
        onChangeText={(text) => setTipPercentage(parseFloat(text))}
      />
      </View>

      <View style={styles.button2}>
      <Button title="Calcular" onPress={calculateTip} />
      <Button title="Limpiar" onPress={clearInputs} />
      </View>


      <View  style={styles.estruccontainer2}>
      <Text style={styles.result}>Importe de la propina: ${tipAmount}</Text>
      <Text style={styles.result}>Propina por Persona: ${tipPerPerson}</Text>
      <Text style={styles.result}>Importe Total: ${totalAmount}</Text>
      <Text style={styles.result}>Importe por Persona: ${amountPerPerson}</Text>
      </View>

      <View style={styles.button1}>
        <Button title="Pagar" onPress={handlePay} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },

  estruccontainer: {
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    marginTop: 8,
    padding: 5,
    borderWidth: 3,
    borderRadius: 16,
  }, 
  estruccontainer2: {
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    marginTop: 8,
    padding: 5,
    borderWidth: 3,
    borderRadius: 16,
  }, 
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100',
    marginBottom: 16,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  result: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 16,
  },
  button1: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    padding: 2,
  },
  button2: {
    flexDirection: 'row',
    padding: 1,
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 3,
  },
});
