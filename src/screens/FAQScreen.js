import React, {useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { categoryFileMap } from '../helpers/categoryMapping';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyle } from '../assets/globalStyle';

export default function FAQScreen() {
  console.log('=== In FAQScreen ===')

  const navigation = useNavigation();
  const route = useRoute();
  const { faqId, categoryId, fromScreen } = route.params; // Get categoryId from params

  const [faq, setFaq] = useState(null);
  const [isExpended, setIsExpended] = useState(false);

  useEffect(() => {
    console.log('categoryId:', categoryId); // Debugging the categoryId
    console.log('faqId:', faqId); // Debugging the faqId
    console.log('fromScreen:', fromScreen);
    
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

  // Handle navigation back based on where the user came from
  const handleBackPress = () => {
    if (fromScreen === 'Search') {
      navigation.navigate('Search');
    }
    else if (fromScreen === 'List') {
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.lastModified}>{faq.lastModified}</Text>

      <View style={styles.questionContainer}>
        <View style={styles.questionRow}>
          <Text style={[globalStyle.subheading, {textAlign: 'left', flex: 1}]}>
            {isExpended ? faq.question : `${faq.question.slice(0, 50)}...`}
          </Text>

          <TouchableOpacity onPress={() => setIsExpended(!isExpended)}>
            <Ionicons
              name={isExpended ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={24}
              color='grey'
            />
          </TouchableOpacity>

        </View>
      </View>

      <ScrollView style={styles.answerContainer}>
        <Text style={globalStyle.text}>{faq.answer}</Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  questionContainer:{
    padding: 15,
    backgroundColor: '#b5b5b5',
    marginBottom: 10,
    borderRadius: 15,
  },

  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  answerContainer:{
    padding: 15,
    backgroundColor: '#dedede',
    marginBottom: 10,
    borderRadius: 15,
  },

  lastModified: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    paddingBottom: 10,
    textDecorationLine: 'underline'
  },
});
