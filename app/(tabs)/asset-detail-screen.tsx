import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const assets = ['Apple Inc', 'Tesla Inc', 'Microsoft Corporation', 'Amazon.com Inc', 'Google Inc'];

const mockChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      data: [420, 425, 430, 428, 432],
      strokeWidth: 2,
    },
  ],
};

const AssetDetailScreen = () => {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);

  const handleInvestPress = () => {
    // navigate to invest screen with asset
    console.log(`Navigating to invest screen for: ${selectedAsset}`);
    router.push({ pathname: '/invest', params: { asset: selectedAsset } });
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Picker */}
<Picker 
  selectedValue={selectedAsset}
  onValueChange={(itemValue) => setSelectedAsset(itemValue)}
  style={[styles.picker, { height: 100 }]}  // Moderate height for picker button
  dropdownIconColor="#00e6e6"
  itemStyle={{ height: 100, fontSize: 16 }} // Slightly smaller dropdown items
>
  {assets.map((asset) => (
    <Picker.Item key={asset} label={asset} value={asset} color="#fff" />
  ))}
</Picker>

      <Text style={styles.assetTitle}>{selectedAsset}</Text>

      {/* Chart */}
      <LineChart
        data={mockChartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#1a1a2e',
          backgroundGradientFrom: '#0c0c1e',
          backgroundGradientTo: '#0c0c1e',
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          labelColor: () => '#ccc',
        }}
        style={styles.chart}
        bezier
      />

      <Text style={styles.price}>$432.15</Text>
      <Text style={styles.changePositive}>+0.75%</Text>
      <Text style={styles.description}>
        {selectedAsset} is a high-performing ETF tracking tech companies.
      </Text>

      <TouchableOpacity style={styles.investButton} onPress={handleInvestPress}>
        <Text style={styles.investText}>Invest in this Asset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AssetDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c1e',
    padding: 20,
    paddingTop: 50
  },
  picker: {
    color: '#fff',
    marginBottom: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    
  },
  assetTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chart: {
    borderRadius: 16,
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    color: '#00e6e6',
    marginTop: 10,
  },
  changePositive: {
    fontSize: 16,
    color: '#00ff99',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 40,
  },
  investButton: {
    backgroundColor: '#00e6e6',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  investText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
