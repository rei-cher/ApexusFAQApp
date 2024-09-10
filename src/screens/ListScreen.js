import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FAQs from '../FAQs.json'; // Import the FAQs placeholder data
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId } = route.params;

  const [filteredFAQs, setFilteredFAQs] = useState([]);

  useEffect(() => {
    // Filter FAQs by category (dummy logic since we don't have categories in JSON)
    const filtered = FAQs.faqs.filter(faq => faq.categoryId === categoryId);
    setFilteredFAQs(filtered);
  }, [categoryId]);

  const renderFAQ = ({ item }) => (
    <TouchableOpacity
        style={styles.faqItem}
        onPress={() => navigation.navigate('FAQDetail', { faqId: item.id })}
    >
        <Text style={styles.question}>{item.question}</Text>
        <Text style={styles.answer}>{item.answer.slice(0, 50)}... <Text style={styles.continueReading}>Continue Reading</Text></Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>FAQs List</Text>
        <FlatList
            data={filteredFAQs}
            keyExtractor={(item) => item.id}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  faqItem: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
  question: {
    fontSize: 18,
  },
  answer: {
    fontSize: 14,
    color: '#666',
  },
  continueReading: {
    color: '#007BFF',
  },
});
