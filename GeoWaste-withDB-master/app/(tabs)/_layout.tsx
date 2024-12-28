import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />

      {/* Map Tab */}
      <Tabs.Screen
        name="map"
        options={{
          title: 'Collection Points',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/map.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />

      {/* Recycling Tab */}
      <Tabs.Screen
        name="recycle"
        options={{
          title: 'Recycling',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/recycle.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />

      {/* Menu Tab */}
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/menu.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
