import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../Screens/Cart';
import Disponibles from '../Screens/Disponibles';
import Ticket from '../Screens/Ticket';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Caja"
                component={Disponibles}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Carrito"
                component={Cart}
                options={{headerShown:true}}
            />

            <Stack.Screen
                name="Ticket"
                component={Ticket}
                options={{headerShown:true}}
            />

        </Stack.Navigator>
    )
}
