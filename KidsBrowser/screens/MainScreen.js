// Вставьте этот код в файл KidsBrowser/screens/MainScreen.js

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import WebsiteView from '../components/WebsiteView';
import styles from './MainScreen.styles.js'; // <-- 1. Импортируем стили из нового файла

const menuIcon = require('../assets/images/menu-icon.png');

const MainScreen = ({ route, navigation }) => {
  const [currentUrl, setCurrentUrl] = useState('https://chehmet.github.io/EminGames/');

  useEffect(() => {
    if (route.params?.url) {
      setCurrentUrl(route.params.url);
    }
  }, [route.params?.url]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={menuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kids Browser</Text>
      </View>
      <WebsiteView url={currentUrl} />
    </SafeAreaView>
  );
};

// 2. Весь блок const styles = StyleSheet.create(...) отсюда удален.

export default MainScreen;