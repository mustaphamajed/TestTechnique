
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavorisScreen from './FavorisScreen';
import HomeScreen from  './HomeScreen';
import ListScreen from './ListScreen';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Favoris" component={FavorisScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}