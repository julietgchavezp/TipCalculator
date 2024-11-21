import {Button} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function About( {navigation} ) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de Propinas</Text>
      <Text style={styles.text}>Versión 0.1</Text>
      
      <View style={styles.button}>
      <Button
       title="Preferencias"
      onPress={() => navigation.navigate("UserPreferences")} 
      
      />
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
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
   
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
