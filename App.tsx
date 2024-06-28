import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  return (
    <WebView
      source={{uri: 'https://jnpa-dev.code-b.dev/'}}
      style={{flex: 1}}
      onLoadStart={() => {
        console.log('on load start called');
      }}
      onLoadProgress={({nativeEvent}) => {
        console.log(`loading progress: ${nativeEvent.progress}`);
      }}
      onLoad={() => {
        console.log('webView loaded');
      }}
      onLoadEnd={() => {
        console.log('on load end called');
        setTimeout(() => {
          SplashScreen.hide();
        }, 2000);
      }}
    />
  );
};

export default App;

const styles = StyleSheet.create({});
