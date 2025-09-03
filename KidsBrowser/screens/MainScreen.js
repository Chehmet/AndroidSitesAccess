// Вставьте этот код в файл KidsBrowser/screens/MainScreen.js

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import WebsiteView from '../components/WebsiteView';
import styles from './MainScreen.styles.js';

const menuIcon = require('../assets/images/menu-icon.png');

const MainScreen = ({ route, navigation }) => {
  const [currentUrl, setCurrentUrl] = useState('https://www.wikipedia.org/');

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
        <Text style={styles.headerTitle}>Websites for Kids</Text>
      </View>
      <WebsiteView url={currentUrl} />
    </SafeAreaView>
  );
};

export default MainScreen;