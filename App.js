import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
const Stack = createStackNavigator();

const App = () => {			
  return (			
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>   
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>      
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  </NavigationContainer>	
  );			
}			
			
export default App;			
