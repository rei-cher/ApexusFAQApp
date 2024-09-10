import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={styles.logo}>Apexus</Text>
      <Text style={styles.date}>Today's Date: {new Date().toLocaleDateString()}</Text>
      <Text style={styles.version}>App Version: 1.0.0</Text>
      <Text style={styles.copyright}>Copyright: Pavel Drozdov</Text>
      
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  version: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  copyright: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 18,
  },
});
