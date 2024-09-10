import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FAQs from '../FAQs.json'; // Import the FAQs placeholder data

export default function FAQScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { faqId } = route.params;

  const faq = FAQs.faqs.find(item => item.id === faqId);

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.question}>{faq.question}</Text>
      <Text style={styles.answer}>{faq.answer}</Text>
      <Text style={styles.lastModified}>Last Modified: {faq.lastModified}</Text>
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
