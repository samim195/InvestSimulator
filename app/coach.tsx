import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function CoachScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>AI Coach Screen</Text>
      <Link href="/(tabs)/home-screen" style={{ marginTop: 12, color: 'blue' }}>Go Home</Link>
    </View>
  );
}