import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyle, getColors } from '../assets/globalStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFS from 'react-native-fs';
import { ThemeContext } from '../helpers/ThemeContext';

export default function ListScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { filename } = route.params;

  console.log(route.params);

  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useContext(ThemeContext);

  const setGlobalStyle = globalStyle(isDarkMode);

  const colors = getColors(isDarkMode);

  useEffect(() => {
    // Fetch the corresponding JSON file from the assets folder
    const loadFAQs = async () => {
      try {
        let filePath;

        filePath = `faq_categories/${filename}`;
        const jsonContent = await RNFS.readFileAssets(filePath, 'utf8');
        const jsonData = JSON.parse(jsonContent);
        setFilteredFAQs(jsonData);
      } catch (error) {
        console.error('Error loading JSON file:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFAQs();
  }, [filename]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading FAQs...</Text>
      </View>
    );
  }

  const renderFAQ = ({ item }) => (
    <TouchableOpacity
      style={[styles.faqItem, {backgroundColor: colors.containerColor}]}
      onPress={() => navigation.navigate('FAQDetail', { faqId: item.ID, categoryId: route.params.categoryId, fromScreen: 'List' })}
    >
      <Text style={[setGlobalStyle.subheading, {textAlign: 'left', color: colors.h2Color}]}>Question:</Text>
      <Text style={[setGlobalStyle.text, {color: colors.textColor}]}>{item.question}</Text>
      <Text style={[setGlobalStyle.subheading, {textAlign: 'left', color: colors.h2Color}]}>Answer:</Text>
      <Text style={[setGlobalStyle.text, {color: colors.textColor}]}>{item.answer.slice(0, 100)}... <Text style={styles.continueReading}>{'\n'}Continue Reading</Text></Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={colors.errorColor} />
      </TouchableOpacity>

      <Text style={[setGlobalStyle.heading, {color: colors.h1Color}]}>{route.params.title}</Text>
      <FlatList
        data={filteredFAQs}
        keyExtractor={(item) => item.ID}
        renderItem={renderFAQ}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  faqItem: {
    padding: 15,
    backgroundColor: '#d9dbde',
    marginBottom: 10,
    borderRadius: 15,
  },
  continueReading: {
    fontFamily: 'NunitoSans',
    fontWeight: '700',
    color: '#007BFF',
  },
  backButton: {
    marginBottom: 20,
  },
});
