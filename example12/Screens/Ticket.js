import React, { useContext} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { PricingCard } from 'react-native-elements';
import {ProductosContext} from '../Context/ProductosContext';

export default function Ticket({navigation}) {
    const {setCarro,total,setTotal,lista}= useContext(ProductosContext);

    const price="$"+total;
    const totPro=(lista.length+1)+" productos";
    const clear =()=>{
        setCarro({});
        setTotal(0);
        navigation.navigate('Caja');
    }
    return (
        <View style={styles.container}>
            <PricingCard
            color="#4f9deb"
            title="ZARA"
            price={price}
            info={[ 'Disfrute su compra', '06/01/2020']}
            button={{ title: 'Comprar', icon: 'flight-takeoff',onPress:{clear}}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});