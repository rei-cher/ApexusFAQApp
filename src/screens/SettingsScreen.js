import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../helpers/ThemeContext';
import { getColors } from '../assets/globalStyle';

export default function SettingsScreen() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const colors = getColors(isDarkMode);

  return (
    <View style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <Text style={[styles.logo, {color: colors.h1Color}]}>Apexus</Text>
      <Text style={[styles.date, {color: colors.h2Color}]}>Today's Date: {new Date().toLocaleDateString()}</Text>
      <Text style={[styles.version,{color: colors.h2Color}]}>App Version: 1.0.0</Text>
      <Text style={[styles.copyright, {color: colors.textColor}]}>Copyright: Pavel Drozdov</Text>
      
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, {color: colors.textColor}]}>Dark Mode</Text>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 18,
  },
});
