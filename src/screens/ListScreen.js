import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFS from 'react-native-fs';

export default function ListScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { filename } = route.params;

  console.log(route.params);

  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      style={styles.faqItem}
      onPress={() => navigation.navigate('FAQDetail', { faqId: item.ID, categoryId: route.params.categoryId  })}
    >
      <Text style={styles.question_title}>Question:</Text>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer_title}>Answer:</Text>
      <Text style={styles.answer}>{item.answer.slice(0, 50)}... <Text style={styles.continueReading}>Continue Reading</Text></Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>{route.params.title}</Text>
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
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: '900',
    textAlign: 'center'
  },
  faqItem: {
    padding: 15,
    backgroundColor: '#bfbfbf',
    marginBottom: 10,
    borderRadius: 15,
  },
  question_title: {
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 5
  },
  question: {
    fontSize: 16,
  },
  answer_title: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 5,
    paddingBottom: 5
  },
  answer: {
    fontSize: 16,
    color: '#666',
  },
  continueReading: {
    color: '#007BFF',
  },
  backButton: {
    marginBottom: 20,
  },
});
