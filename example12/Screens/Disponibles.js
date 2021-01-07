import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const Disponibles = ({navigation}) => {

    const {productos,agregarCarro} = useContext(ProductosContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Caja', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'shopping-cart', color: '#fff', onPress:()=>
            navigation.navigate('Carrito')}}
           containerStyle={{backgroundColor:'gray'}}
        />
        <ScrollView>
        {
            
            productos.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${(a.precio)}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='md-add-circle' size={30} color={'green'} onPress={()=>agregarCarro(a,a.precio)}/>

                    </View>
                </ListItem>

            ))
            
        }


        </ScrollView>


    </View>
    );
}
 
export default Disponibles;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});