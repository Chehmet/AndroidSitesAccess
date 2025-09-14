import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

interface Website {
  id: string;
  url: string;
  icon: string;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

const saveWebsites = async (newWebsites: Website[]) => {
  try {
    const jsonValue = JSON.stringify(newWebsites);
    await AsyncStorage.setItem('websites', jsonValue);
  } catch (error) {
    console.error('Error saving websites:', error);
  }
};

export const useWebsites = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const loadWebsites = async () => {
    try {
      const savedWebsites = await AsyncStorage.getItem('websites');
      if (savedWebsites === null) {
        const initialWebsites: Website[] = [
          { id: '1', url: 'https://rganeyev.github.io/kids-finance/', icon: 'finance' },
          { id: '2', url: 'https://chehmet.github.io/EminGames/', icon: 'game' },
        ];
        setWebsites(initialWebsites);
        await saveWebsites(initialWebsites);
      } else {
        setWebsites(JSON.parse(savedWebsites));
      }
    } catch (error) {
      console.error('Error loading websites:', error);
    }
  };

  useEffect(() => {
    loadWebsites();
  }, []);

  const addWebsite = (newUrl: string, selectedIcon: string) => {
    let urlToAdd = newUrl.trim().toLowerCase();
    if (urlToAdd === '') {
      Alert.alert('Oops!', 'Please enter a website address.');
      return;
    }
    if (!urlToAdd.startsWith('http')) {
      urlToAdd = 'https://' + urlToAdd;
    }
    const isFile = urlToAdd.split('/').pop()?.includes('.') || false;
    if (!isFile && !urlToAdd.endsWith('/')) {
      urlToAdd += '/';
    }

    const newWebsite: Website = {
      id: Date.now().toString(),
      url: urlToAdd,
      icon: selectedIcon,
    };
    const updatedWebsites = [...websites, newWebsite];
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
  };

  const removeWebsite = (idToRemove: string) => {
    const updatedWebsites = websites.filter((site) => site.id !== idToRemove);
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
  };

  return { websites, addWebsite, removeWebsite };
};
