import React, { useRef } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { StyleSheet, View, StatusBar, BackHandler } from 'react-native';
import Constants from 'expo-constants';
import { useBackHandler } from '@react-native-community/hooks';

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  const webViewRef = useRef<WebView>(null);
  const canGoBack = useRef(false);

  useBackHandler(() => {
    if (canGoBack.current && webViewRef.current) {
      webViewRef.current.goBack();
      return true; // Intercepts go back event
    }
    return false; // Does not inteccept go back event, default behaviour 
  });

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    canGoBack.current = navState.canGoBack;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222425" />
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://igrejafamiliaevida.com.br/' }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
