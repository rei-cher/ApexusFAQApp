import React, {useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { categoryFileMap } from '../helpers/categoryMapping';

export default function FAQScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { faqId, categoryId } = route.params; // Get categoryId from params

  const [faq, setFaq] = useState(null);

  useEffect(() => {
    console.log('categoryId:', categoryId); // Debugging the categoryId
    console.log('faqId:', faqId); // Debugging the faqId
    
    const loadFAQ = () => {
      try {
        // Get the corresponding JSON file for the category
        const jsonData = categoryFileMap[categoryId];
        if (jsonData) {
          const foundFaq = jsonData.find(item => item.ID === faqId); // Find FAQ by ID
          if (foundFaq) {
            setFaq(foundFaq);
          } else {
            console.error('FAQ not found.');
          }
        } else {
          console.error('No data for this category.');
        }
      } catch (error) {
        console.error('Error loading JSON file:', error);
      }
    };

    loadFAQ();
  }, [faqId, categoryId]); // Re-run if either changes

  if (!faq) {
    return (
      <View style={styles.container}>
        <Text>Loading FAQ...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.question}>{faq.question}</Text>
      <Text style={styles.answer}>{faq.answer}</Text>
      <Text style={styles.lastModified}>{faq.lastModified}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
  },
  lastModified: {
    fontSize: 12,
    color: '#666',
  },
});
