import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const PortfolioScreen = () => {
  const lineData = {
    labels: ['W1', 'W2', 'W3', 'W4'],
    datasets: [
      {
        data: [100, 120, 110, 150],
        color: () => '#00e6e6',
        strokeWidth: 2,
      },
    ],
  };

  const pieChartData = [
    { name: 'ETFs', population: 60, color: '#007aff', legendFontColor: '#FFF', legendFontSize: 14 },
    { name: 'Stocks', population: 30, color: '#6f00ff', legendFontColor: '#FFF', legendFontSize: 14 },
    { name: 'Bonds', population: 10, color: '#00cfff', legendFontColor: '#FFF', legendFontSize: 14 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Portfolio</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.percent}>+2.05%</Text>
      </View>

      <LineChart
        data={lineData}
        width={screenWidth - 32}
        height={180}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withDots={false}
        withInnerLines={false}
      />

      <Text style={styles.subTitle}>Asset Breakdown</Text>
      <PieChart
        data={pieChartData}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#0b0f1a',
  backgroundGradientTo: '#0b0f1a',
  color: () => `#00f0ff`,
  labelColor: () => '#ffffff',
  propsForLabels: {
    fontFamily: 'Poppins-Regular',
  },
  strokeWidth: 2,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f1a',
    padding: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  percent: {
    color: '#00ff99',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
  },
  chart: {
    borderRadius: 12,
    marginBottom: 30,
  },
  subTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default PortfolioScreen;
