
import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
  TextInput, Image, Alert, SafeAreaView, KeyboardAvoidingView, Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './CustomSidebar.styles.js';

const defaultIcon = require('../assets/images/default-icon.png');

const CustomSidebar = ({ navigation }) => {
  const [websites, setWebsites] = useState([]);
  const [newUrl, setNewUrl] = useState('');

  // ... вся логика (loadWebsites, saveWebsites и т.д.) остается без изменений ...
  useEffect(() => { loadWebsites(); }, []);
  const loadWebsites = async () => { /* ... */ };
  const saveWebsites = async (newWebsites) => { /* ... */ };
  const handleAddWebsite = () => { /* ... */ };
  const handleRemoveWebsite = (id) => { /* ... */ };
  const handleIconPress = (url) => { /* ... */ };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Мои Сайты</Text>
      <FlatList
        data={websites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.websiteItem}>
            <TouchableOpacity onPress={() => handleIconPress(item.url)} style={styles.iconButton}>
              <Image source={defaultIcon} style={styles.websiteIcon} />
              <Text style={styles.websiteUrl} numberOfLines={1}>{item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveWebsite(item.id)}>
              <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.addWebsiteContainer}>
          <Text style={styles.addTitle}>Добавить новый сайт</Text>
          <TextInput
            style={styles.input}
            placeholder="например, wikipedia.org"
            value={newUrl}
            onChangeText={setNewUrl}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddWebsite}>
            <Text style={styles.addButtonText}>Добавить ✨</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Код функций, которые я сократил, должен остаться таким же, как в предыдущих ответах
// loadWebsites, saveWebsites, handleAddWebsite, handleRemoveWebsite, handleIconPress

export default CustomSidebar;