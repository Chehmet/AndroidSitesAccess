// Вставьте этот код в файл KidsBrowser/components/WebsiteView.js

import React from 'react';
import { WebView } from 'react-native-webview';
import styles from './WebsiteView.styles.js';
import { Platform } from 'react-native';

const WebsiteView = ({ url }) => {
  if (Platform.OS === 'web') {
    return (
      <iframe
        src={url}
        style={{ flex: 1, border: 'none', width: '100%', height: '100%' }}
        title="Website Content"
      />
    );
  } else {
    return <WebView source={{ uri: url }} style={styles.webview} />;
  }
};

export default WebsiteView;