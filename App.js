import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TipCalculator from './components/TipCalculator';
import ContributionCalculator from './components/ContributionCalculator';
import AboutScreen from './components/AboutScreen';


const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculadora de Propina" component={TipCalculator} />
        <Tab.Screen name="Calculadora de Aportación" component={ContributionCalculator} />
        <Tab.Screen name="AboutScreen" component={AboutScreen} options={{title:'Acerca de', headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
