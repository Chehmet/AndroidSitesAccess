// Вставьте этот обновленный код в файл KidsBrowser/components/WebsiteView.js

import React from 'react';
import { WebView } from 'react-native-webview';
import styles from './WebsiteView.styles.js';

// 1. Импортируем Platform - специальный инструмент от React Native,
// который знает, где запущено приложение (на телефоне или в браузере).
import { Platform } from 'react-native';

const WebsiteView = ({ url }) => {
  // 2. Проверяем, на какой платформе запущен код.
  if (Platform.OS === 'web') {
    // 3. ЕСЛИ это веб-браузер, возвращаем стандартный HTML-тег <iframe>.
    // Мы задаем ему стили, чтобы он занимал все доступное место.
    return (
      <iframe
        src={url}
        style={{ flex: 1, border: 'none', width: '100%', height: '100%' }}
        title="Website Content"
      />
    );
  } else {
    // 4. ИНАЧЕ (если это Android или iOS), возвращаем наш привычный WebView.
    return <WebView source={{ uri: url }} style={styles.webview} />;
  }
};

export default WebsiteView;