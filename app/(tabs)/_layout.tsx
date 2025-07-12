import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00F0FF',
        tabBarInactiveTintColor: '#9BA1A6',
        tabBarStyle: {
          backgroundColor: '#0D0D0D',
          borderTopColor: '#222',
        },
        headerStyle: {
          backgroundColor: '#0D0D0D',
        },
        headerTintColor: '#ffffff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // Hides this screen from the tab bar
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="home-screen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={28} color={color} />,
          headerShown: false, // The home screen has its own content, no header needed
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({ color }) => <MaterialIcons name="show-chart" size={28} color={color} />,
        }}
      />
            <Tabs.Screen
        name="asset-detail-screen"
        options={{
          title: 'Details',
          tabBarIcon: ({ color }) => <MaterialIcons name="info" size={28} color={color} />,
          headerShown: false, // 
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <MaterialIcons name="pie-chart" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}