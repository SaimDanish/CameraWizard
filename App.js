import React from 'react';
import {Text,View} from 'react-native'
import HomeScreen from './src/HomeScreen'
import CameraScreen from './src/CameraScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App=()=>{
  return(
    <MenuProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="CameraScreen" component={CameraScreen}
            options={{
                headerShown: true,
                 headerTintColor: '#fff',
                 
               }} 
            />

        </Stack.Navigator>

      </NavigationContainer>
    </MenuProvider>
      
//  <MainPage/>
  )}

export default App