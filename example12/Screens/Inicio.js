import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {Header} from 'react-native-elements';

const Inicio = () => {
    return (
        <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('../Image/imgZara1.jpg')}
      />
        <Text>ZARA </Text>
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    tinyLogo:{
      width:350,
      height:250,
    }
});