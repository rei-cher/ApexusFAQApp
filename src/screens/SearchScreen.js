import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FAQs from '../FAQs.json'; // Import the FAQs placeholder data

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = FAQs.faqs.filter(faq => 
      faq.question.toLowerCase().includes(text.toLowerCase()) || 
      faq.answer.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFAQs(filtered);
  };

  const renderFAQ = ({ item }) => (
    <TouchableOpacity 
      style={styles.faqItem}
      onPress={() => navigation.navigate('FAQDetail', {faqId: item.id})}
    >
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer.slice(0, 50)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search FAQs..."
        value={searchText}
        onChangeText={handleSearch}
      />
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
    padding: 20
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 20
  },
  faqItem: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 15,
  },
  question: {
    fontSize: 18,
  },
  answer: {
    fontSize: 14,
    color: '#666',
  },
});
