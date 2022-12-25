
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Homepage from '../Screens/Homepage';
import Singup from '../Screens/Singup';
import Profile from '../Screens/Profile';
import Industrail from '../Screens/IndustrailBooking';
import Local from '../Screens/LocalBooking';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Singup" component={Singup} />
      
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="industrailBooking" component={Industrail} />
        <Stack.Screen name="SchoolBooking" component={Industrail} />
        <Stack.Screen name="LocalBooking" component={Local} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;