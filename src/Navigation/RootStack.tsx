import FavScreen from '../UI/Screens/FavScreen';
import HomeScreen from '../UI/Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tab.navigator';

export type RootStackParamList = {
  Home: undefined;
  Fav: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Fav" component={FavScreen} />
    </Stack.Navigator>
  );
}