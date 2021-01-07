import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Consulta from '../Screens/Consulta';
import BarraBusqueda from '../Screens/BarraBusqueda';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Consulta"
            tabBarOptions={{
                activeTintColor:"#060606",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Consulta"
                component={Consulta}
                options={{
                    tabBarLabel:"Categoria"
                }}
            
            />
            <Tab.Screen
                name="BarraBusqueda"
                component={BarraBusqueda}
                options={{
                    tabBarLabel:"Buscar"
                }}
            />
        </Tab.Navigator>
    )
}