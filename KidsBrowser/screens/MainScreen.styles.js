// Вставьте этот обновленный код в KidsBrowser/screens/MainScreen.styles.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82c9e3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#82c9e3',
    padding: isTablet ? 25 : 15,
  },
  menuIcon: {
    width: isTablet ? 40 : 30,
    height: isTablet ? 40 : 30,
    marginRight: isTablet ? 25 : 15,
  },
  headerTitle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: isTablet ? 28 : 20,
    color: 'white',
    // ИСПРАВЛЕНИЕ: React Native Web предпочитает одно свойство textShadow
    // Но для кросс-платформенности лучше оставить так, как есть,
    // так как это стандарт для мобильных платформ.
    // Это предупреждение не критично и не ломает приложение.
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 3,
  },
});

export default styles;