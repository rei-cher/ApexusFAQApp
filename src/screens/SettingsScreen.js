import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../helpers/ThemeContext';
import { getColors } from '../assets/globalStyle';

export default function SettingsScreen() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const colors = getColors(isDarkMode);

  return (
    <View style={[styles.container, {backgroundColor: colors.mainBackground}]}>
      <Text style={[styles.logo, {color: colors.heading1}]}>Apexus</Text>
      <Text style={[styles.date, {color: colors.heading2}]}>Today's Date: {new Date().toLocaleDateString()}</Text>
      <Text style={[styles.version,{color: colors.heading2}]}>App Version: 1.0.0</Text>
      <Text style={[styles.copyright, {color: colors.text}]}>Copyright: Pavel Drozdov</Text>
      
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, {color: colors.text}]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
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
    fontSize: 46,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '900'
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 18,
  },
});
