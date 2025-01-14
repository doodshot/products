import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigation/RootStack';

export default function App() {
  useEffect(() => {
    // Nascondi la barra di stato quando l'app è avviata
    StatusBar.setHidden(true, 'fade'); // 'fade' per un'animazione di dissolvenza
  }, []);

  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}