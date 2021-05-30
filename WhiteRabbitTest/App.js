import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View
} from "react-native";
import { PersistGate } from 'redux-persist/integration/react';

import * as Updates from 'expo-updates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { store, persistor } from './src/redux/store';
export default function App() {
  const [loading, setLoading] = useState(true);

  //codepush
  async function fetchUpdate() {
    try {
      const updateAvailable = await Updates.checkForUpdateAsync()
      if (updateAvailable.isAvailable) {
        await Updates.fetchUpdateAsync()
        await Updates.reloadAsync()
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUpdate()
  }, []);
  if (loading) {
    return <View style={{ flex: 1 }} />
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>

    </Provider>
  );
}

