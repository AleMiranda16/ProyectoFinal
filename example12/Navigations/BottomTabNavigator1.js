import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Inicio from '../Screens/Inicio';
import Acerca from '../Screens/Acerca';
import Consulta from '../Navigations/TopTapNavigator1';
import Listado from '../Navigations/StackNavigator1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Disponibles from '../Navigations/StackNavigator2';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"blue",
                inactiveTintColor:"#000000",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="Caja"
                component={Disponibles}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-cart"} size={20} color={color}/>
                    )
                }}
            />           
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Prendas"
                component={Listado}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-shirt"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Consulta"
                component={Consulta}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-search"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Acerca"
                component={Acerca}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-woman"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}