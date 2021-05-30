import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "screens/Dashboard";
import Detail from "screens/Detail";
export default function Navigation() {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }

  const Stack = createStackNavigator();
//navigator
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}