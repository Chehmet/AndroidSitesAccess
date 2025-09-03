// Вставьте этот код в файл KidsBrowser/App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import CustomSidebar from './components/CustomSidebar';

import { useFonts, Nunito_700Bold, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebar {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent',
            width: 320, // Ширина для планшета
          },
          drawerType: 'front',
        }}
      >
        <Drawer.Screen name="Main" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}