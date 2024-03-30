import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InStockScreen from './InstockScreen';
import LoadStockScreen from './LoadStock';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const StockTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontWeight: 'bold', color: 'white' },
        style: {
          backgroundColor: '#0367FE',
          elevation: 0,
          shadowOpacity: 0, 
        },

        tabStyle: {
          paddingBottom: 5,
        },
        showLabel: true,
        showIcon: true,
    }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center',  }}>
            <View style={{ width: 6, height: 6, backgroundColor: 'white', borderRadius: 10, opacity: focused ? 1 : 0 }} />
          </View>
        ),
      })}
    >
      <Tab.Screen name="Load Stock" component={LoadStockScreen} />
      <Tab.Screen name="InStock" component={InStockScreen} />
    </Tab.Navigator>
  );
}

export default StockTabs;
