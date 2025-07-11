import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const HomeScreen: React.FC = () => {
  const [recurring, setRecurring] = React.useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Portfolio Balance Card */}
        <LinearGradient colors={['#5F27CD', '#00F0FF']} style={styles.card}>
          <Text style={styles.cardTitle}>Portfolio Balance</Text>
          <Text style={styles.cardAmount}>$12,435.22</Text>
        </LinearGradient>

        {/* Asset Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Asset Breakdown</Text>
          <View style={styles.assetRow}>
            <Text style={styles.assetName}>ETFs</Text>
            <Text style={styles.assetPercent}>45%</Text>
          </View>
          <View style={styles.assetRow}>
            <Text style={styles.assetName}>Stocks</Text>
            <Text style={styles.assetPercent}>35%</Text>
          </View>
          <View style={styles.assetRow}>
            <Text style={styles.assetName}>Bonds</Text>
            <Text style={styles.assetPercent}>20%</Text>
          </View>
        </View>

        {/* Recurring Investment Toggle */}
        <View style={styles.section}>
          <View style={styles.toggleRow}>
            <Text style={styles.sectionTitle}>Recurring Investment</Text>
            <Switch
              value={recurring}
              onValueChange={setRecurring}
              thumbColor="#00F0FF"
              trackColor={{ false: '#333', true: '#5F27CD' }}
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Sell</Text>
          </TouchableOpacity>
        </View>

        {/* AI Coach Placeholder */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your AI Coach</Text>
          <Text style={styles.sectionNote}>Start receiving insights soon.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;



export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 8,
  },
  cardAmount: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
    fontWeight: '600',
  },
  assetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  assetName: {
    color: '#ccc',
    fontSize: 15,
  },
  assetPercent: {
    color: '#00F0FF',
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#1A1A1A',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  actionText: {
    color: '#00F0FF',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionNote: {
    color: '#666',
    fontSize: 14,
  },
});
