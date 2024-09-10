import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: '1', name: 'General' },
  { id: '2', name: 'Technical' },
  { id: '3', name: 'Account' },
];

export default function MainScreen() {
  const navigation = useNavigation();

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.category}
      onPress={() => navigation.navigate('List', { categoryId: item.id })}
    >
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
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
  category: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 18,
  },
});
