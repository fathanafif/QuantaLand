import 'react-native-gesture-handler';
import React from 'react';
import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {

  const [loading, setLoading] = useState(true)
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  const checkOnboarding = async () => {
    try {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    } catch (error) {
      console.log('Error @checkOnboarding: ', error)
    } finally {
      setLoading(false)
    }

    AsyncStorage.removeItem('isAppFirstLaunched');
  }
    useEffect(() => {
      checkOnboarding()
    }, [])


  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;