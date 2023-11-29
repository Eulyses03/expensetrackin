import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Alert, MaterialIcons} from '@expo/vector-icons';

const ViewLiquidationScreen = () => {
  const [liquidationData, setLiquidationData] = useState([]);

  useEffect(() => {
    const fetchLiquidationData = async () => {
      const response = await fetch('https://your-api-endpoint', {
        method: 'GET',
      });

      const data = await response.json();
      if (data.success) {
        setLiquidationData(data.data);
      } else {
        Alert.alert('Error', 'Failed to fetch liquidation data.');
      }
    };

    fetchLiquidationData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#007bff" />
        </TouchableOpacity>

        <Text style={styles.title}>View Liquidations</Text>
      </View>

      <FlatList
        data={liquidationData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Expense ID: {item.id}</Text>
            <Text style={styles.listItemText}>
              Liquidated Amount: {item.amount}
            </Text>
            <Text style={styles.listItemText}>
              Liquidated Date: {item.liquidatedDate}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => {
          setLiquidationData();
        }}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  listItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  refreshButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  refreshButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ViewLiquidationScreen;
