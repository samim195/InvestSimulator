import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { JSX } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const username = 'Alex'; // Replace dynamically if needed

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome back,{"\n"}{username}</Text>
          <Text style={styles.subtitle}>Let's grow your $100 today!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <NeonButton
            icon={<MaterialIcons name="show-chart" size={32} color="white" />}
            text="Invest Now"
            onPress={() => router.navigate('invest')}
          />
          <NeonButton
            icon={<MaterialIcons name="pie-chart" size={32} color="white" />}
            text="My Portfolio"
            onPress={() => router.navigate('portfolio')}
          />
          <NeonButton
            icon={<MaterialCommunityIcons name="robot-outline" size={32} color="white" />}
            text="AI Coach"
            onPress={() => router.push('/coach')}
          />
        </View>

        <LinearGradient colors={['#00f0ff', '#0066ff']} style={styles.challengeBox}>
          <Ionicons name="notifications" size={24} color="white" />
          <Text style={styles.challengeText}>Today's goal:{"\n"}try a $5 weekly ETF plan</Text>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const NeonButton = ({ icon, text, onPress }: { icon: JSX.Element; text: string; onPress?: () => void }) => {
  return (
    <LinearGradient colors={['#00f0ff', '#7f00ff']} style={styles.neonButton}>
      <TouchableOpacity style={styles.buttonInner} onPress={onPress}>
        {icon}
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  container: {
    flex: 1,
    backgroundColor: '#0b0f1a',
    paddingHorizontal: 30, // Keeps content from the sides
    paddingTop: 30, // Moves content down from the top
    paddingRight: 20

  },
  headerContainer: {
    alignItems: 'flex-start',
    marginBottom: 30,
    marginTop: 40,
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
    lineHeight: 36,
  },
  subtitle: {
    color: '#00f0ff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 12,
    marginBottom: 40,
    marginTop: 20,
  },
  neonButton: {
    borderRadius: 16,
    padding: 2,
    flex: 1,
  },
  buttonInner: {
    backgroundColor: '#101522',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-around',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 10,
  },
  challengeBox: {
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#101522',
  },
  challengeText: {
    color: '#ffffff',
    fontSize: 15,
    lineHeight: 20,
  },
});

export default HomeScreen;
