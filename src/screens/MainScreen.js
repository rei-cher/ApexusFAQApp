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
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  category: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});
