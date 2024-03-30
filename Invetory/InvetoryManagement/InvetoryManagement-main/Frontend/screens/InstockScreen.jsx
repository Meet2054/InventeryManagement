import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
const BASE_URL = 'http://10.0.2.2:3030'; // Replace with your actual backend URL

const InStockScreen = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch(`${BASE_URL}/user/persons`);
      if (!response.ok) {
        throw new Error('Error fetching persons');
      }
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.stockname}</Text>
      <Text style={styles.itemText}>{item.stockQuantityAvalible}</Text>
      <Text style={styles.itemText}>{item.stockLoaded}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Available</Text>
        <Text style={styles.headerText}>Loaded</Text>
      </View>
      <FlatList
        data={stocks}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor : "#f2f2f2"
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1, 
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
    flex: 1, // Equal width for each column
    textAlign: 'center',
  },
});

export default InStockScreen;
