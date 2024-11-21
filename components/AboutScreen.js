import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import About from "./About"; 
import UserPreferences from "./UserPreferences";

const AboutStack =createNativeStackNavigator();

export default function AboutScreen() {
    return(
    <AboutStack.Navigator>
        <AboutStack.Screen 
        name="About" 
        component={About} 
        options={{title: "Acerca de"}}/>

     <AboutStack.Screen 
        name="UserPreferences" 
        component={UserPreferences} 
        options={{title: "Preferencias del Usuario"}}/>
    </AboutStack.Navigator>

    );


}