// Вставьте этот обновленный код в KidsBrowser/screens/MainScreen.styles.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82c9e3', // Мягкий голубой цвет фона как на вашем макете
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#82c9e3', // Тот же голубой цвет
    padding: isTablet ? 25 : 15,
    // Убираем тень, делаем вид плоским и чистым
  },
  menuIcon: {
    width: isTablet ? 40 : 30,
    height: isTablet ? 40 : 30,
    marginRight: isTablet ? 25 : 15,
  },
  headerTitle: {
    fontFamily: 'Nunito_700Bold', // <-- ПРИМЕНЯЕМ НАШ НОВЫЙ ШРИФТ
    fontSize: isTablet ? 28 : 20,
    color: 'white',
    // Добавляем легкую тень для "объемности", как в макете
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 3,
  },
});

export default styles;