import React, { useContext} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { PricingCard } from 'react-native-elements';
import {ProductosContext} from '../Context/ProductosContext';

export default function Producto() {
    const {producto}= useContext(ProductosContext);

    const desc="[ "+producto.codigo+ " ]"+producto.descripcion;
    const price=producto.categoria+ " |  $"+producto.precio;
    return (
        <View style={styles.container}>
            <PricingCard
            color="#4f9deb"
            title={desc}
            price={price}
            button={{ title: 'ZARA', icon: 'flight-takeoff'}}
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