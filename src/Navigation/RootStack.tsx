import FavScreen from '../UI/Screens/FavScreen';
import HomeScreen from '../UI/Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tab.navigator';
import React from 'react';
import CartScreen from '../UI/Screens/CartScreen';
import DetailsScreen from '../UI/Screens/DetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Fav: undefined;
  TabNavigator: undefined;
  Cart: undefined;
  Details: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Fav" component={FavScreen} />
      <Stack.Screen name={'Cart'} component={CartScreen} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
}
