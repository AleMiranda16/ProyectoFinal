import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Acerca() {
    return (
        <View style={styles.container}>
             <Text style={styles.baseText}>
      <Text style={styles.titleText} >
        {"Información"}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{"Para conocer mas sobre:" }</Text>
      <Text numberOfLines={5}>{"- Politica de datos" }</Text>
      <Text numberOfLines={5}>{"- Condiciones de uso" }</Text>
      <Text numberOfLines={5}>{"Ponerse en contacto con el desarrollador" }</Text>
    </Text>
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
    baseText: {
        fontFamily: "Cochin"
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
});