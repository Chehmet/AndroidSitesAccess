// Вставьте этот ПОЛНОСТЬЮ НОВЫЙ код в KidsBrowser/components/CustomSidebar.js

import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
  TextInput, Image, Alert, SafeAreaView, StyleSheet, Animated
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseStyles, { sidebar_width_expanded, sidebar_width_collapsed } from './CustomSidebar.styles.js'; // Импортируем стили и ширину

const defaultIcon = require('../assets/images/default-icon.png');
// Добавьте иконки стрелочек в папку /assets/images/
const arrowLeftIcon = require('../assets/images/arrow-left.png');
const arrowRightIcon = require('../assets/images/arrow-right.png');


const CustomSidebar = ({ navigation }) => {
  const [websites, setWebsites] = useState([]);
  const [newUrl, setNewUrl] = useState('');
  const [isExpanded, setIsExpanded] = useState(false); // НОВОЕ СОСТОЯНИЕ для панели
  
  // Анимация для плавного изменения ширины
  const widthAnim = useState(new Animated.Value(sidebar_width_collapsed))[0];

  useEffect(() => {
    loadWebsites();
  }, []);

  // Анимация при изменении состояния isExpanded
  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: isExpanded ? sidebar_width_expanded : sidebar_width_collapsed,
      duration: 300,
      useNativeDriver: false, // width не поддерживается нативным драйвером
    }).start();
  }, [isExpanded]);

   // --- ЛОГИКА, КОТОРАЯ БЫЛА ПОТЕРЯНА ---
  const loadWebsites = async () => {
    try {
      const savedWebsites = await AsyncStorage.getItem('websites');
      if (savedWebsites !== null) {
        setWebsites(JSON.parse(savedWebsites));
      }
    } catch (error) {
      console.error('Error loading websites:', error);
    }
  };

  const saveWebsites = async (newWebsites) => {
    try {
      const jsonValue = JSON.stringify(newWebsites);
      await AsyncStorage.setItem('websites', jsonValue);
    } catch (error) {
      console.error('Error saving websites:', error);
    }
  };

  const handleAddWebsite = () => {
    let urlToAdd = newUrl.trim().toLowerCase();
    if (urlToAdd === '') {
      Alert.alert("Oops!", "Please enter a website address.");
      return;
    }
    if (!urlToAdd.startsWith('http://') && !urlToAdd.startsWith('https://')) {
      urlToAdd = 'https://' + urlToAdd;
    }
    const newWebsite = { id: Date.now().toString(), url: urlToAdd };
    const updatedWebsites = [...websites, newWebsite];
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
    setNewUrl('');
  };

  const handleRemoveWebsite = (id) => {
    const updatedWebsites = websites.filter(site => site.id !== id);
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
  };
  
  const handleIconPress = (url) => {
    navigation.navigate('Main', { url: url });
    navigation.closeDrawer();
  };
  // --- КОНЕЦ БЛОКА С ЛОГИКОЙ ---
  
  return (
    <SafeAreaView>
      <Animated.View style={[baseStyles.container, { width: widthAnim }]}>
        <TouchableOpacity style={baseStyles.toggleButton} onPress={() => setIsExpanded(!isExpanded)}>
          <Image source={isExpanded ? arrowLeftIcon : arrowRightIcon} style={baseStyles.toggleIcon} />
        </TouchableOpacity>

        {isExpanded && <Text style={baseStyles.title}>My Websites</Text>}
        
        <FlatList
          data={websites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => handleIconPress(item.url)} 
              style={[baseStyles.websiteItem, !isExpanded && { justifyContent: 'center' }]}
            >
              <Image source={defaultIcon} style={baseStyles.websiteIcon} />
              {isExpanded && (
                <>
                  <Text style={baseStyles.websiteUrl} numberOfLines={1}>{item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</Text>
                  <TouchableOpacity onPress={() => handleRemoveWebsite(item.id)}>
                    <Text style={baseStyles.removeButton}>❌</Text>
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
          )}
          // Чтобы форма не "прыгала"
          ListFooterComponent={<View style={{ height: 250 }}/>}
        />

        {isExpanded && (
          <View style={baseStyles.addWebsiteContainer}>
            <Text style={baseStyles.addTitle}>Add a new website</Text>
            <TextInput
              style={baseStyles.input}
              placeholder="e.g., wikipedia.org"
              value={newUrl}
              onChangeText={setNewUrl}
              autoCapitalize="none"
            />
            <TouchableOpacity style={baseStyles.addButton} onPress={handleAddWebsite}>
              <Text style={baseStyles.addButtonText}>Add ✨</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

// Вставьте сюда полные версии функций из предыдущего шага
// loadWebsites, saveWebsites, handleAddWebsite, handleRemoveWebsite, handleIconPress

export default CustomSidebar;