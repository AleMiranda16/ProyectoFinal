import React from 'react';
import ProductosProvider from './Context/ProductosContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';


export default function App() {
  return (
    <ProductosProvider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </ProductosProvider>
  );
}



