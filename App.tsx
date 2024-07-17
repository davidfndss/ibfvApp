import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222425" />
      <WebView source={{ uri: 'https://igrejafamiliaevida.com.br/' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
