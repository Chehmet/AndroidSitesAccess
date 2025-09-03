// Вставьте этот код в файл KidsBrowser/components/CustomSidebar.js

import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
  TextInput, Image, Alert, SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './CustomSidebar.styles.js';
import { ICONS, AVAILABLE_ICONS } from './IconLibrary.js';

const CustomSidebar = ({ navigation }) => {
  const [websites, setWebsites] = useState([]);
  const [newUrl, setNewUrl] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(AVAILABLE_ICONS[0]);

  useEffect(() => {
    loadWebsites();
  }, []);

  const loadWebsites = async () => {
    try {
      const savedWebsites = await AsyncStorage.getItem('websites');
      if (savedWebsites === null) {
        const initialWebsites = [
          { id: '1', url: 'https://rganeyev.github.io/kids-finance/', icon: 'finance' },
          { id: '2', url: 'https://chehmet.github.io/emingames/', icon: 'game' },
        ];
        setWebsites(initialWebsites);
        await saveWebsites(initialWebsites);
      } else {
        setWebsites(JSON.parse(savedWebsites));
      }
    } catch (error) { console.error('Error loading websites:', error); }
  };

  const saveWebsites = async (newWebsites) => {
    try {
      const jsonValue = JSON.stringify(newWebsites);
      await AsyncStorage.setItem('websites', jsonValue);
    } catch (error) { console.error('Error saving websites:', error); }
  };

  const handleAddWebsite = () => {
    let urlToAdd = newUrl.trim().toLowerCase();
    if (urlToAdd === '') {
      Alert.alert("Oops!", "Please enter a website address.");
      return;
    }
    if (!urlToAdd.startsWith('http')) {
      urlToAdd = 'https://' + urlToAdd;
    }
    // Проверяем, нужна ли косая черта в конце (для GitHub Pages и т.п.)
    const isFile = urlToAdd.split('/').pop().includes('.');
    if (!isFile && !urlToAdd.endsWith('/')) {
      urlToAdd += '/';
    }

    const newWebsite = {
      id: Date.now().toString(),
      url: urlToAdd,
      icon: selectedIcon,
    };
    const updatedWebsites = [...websites, newWebsite];
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
    setNewUrl('');
  };

  const handleRemoveWebsite = (idToRemove) => {
    const updatedWebsites = websites.filter(site => site.id !== idToRemove);
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
  };

  const handleIconPress = (url) => {
    navigation.navigate('Main', { url: url });
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Websites</Text>
      
      <FlatList
        data={websites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.websiteItem}>
            <TouchableOpacity onPress={() => handleIconPress(item.url)} style={styles.iconButton}>
              <Image source={ICONS[item.icon] || ICONS.default} style={styles.websiteIcon} />
              <Text style={styles.websiteUrl} numberOfLines={1}>{item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveWebsite(item.id)}>
              <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
        style={{flex: 1}}
      />

      <View style={styles.addWebsiteContainer}>
        <Text style={styles.addTitle}>Add a new website</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., wikipedia.org"
          value={newUrl}
          onChangeText={setNewUrl}
          autoCapitalize="none"
        />

        <Text style={styles.addTitle}>Choose an icon</Text>
        <View style={styles.iconSelectorContainer}>
          {AVAILABLE_ICONS.map(iconName => (
            <TouchableOpacity key={iconName} onPress={() => setSelectedIcon(iconName)}>
              <Image
                source={ICONS[iconName]}
                style={[
                  styles.selectorIcon,
                  selectedIcon === iconName && styles.selectedIcon
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddWebsite}>
          <Text style={styles.addButtonText}>Add ✨</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomSidebar;