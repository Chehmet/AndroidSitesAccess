// Вставьте этот обновленный код в KidsBrowser/App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import CustomSidebar from './components/CustomSidebar';

// 1. Импортируем хук для загрузки шрифтов
import { useFonts, Nunito_700Bold, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { View, Text } from 'react-native'; // Импортируем для экрана загрузки

const Drawer = createDrawerNavigator();

export default function App() {
  // 2. Загружаем шрифты
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
  });

  // 3. Пока шрифты не загрузились, показываем пустой экран или экран загрузки
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // 4. Когда шрифты загружены, показываем приложение
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebar {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent', // Фон теперь прозрачный, так как цвет задан в компоненте
            width: 'auto', // Ширина управляется динамически
          },
          drawerType: 'front', // Чтобы панель была поверх контента
        }}
      >
        <Drawer.Screen name="Main" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}