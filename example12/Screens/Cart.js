import React, { useContext} from "react";
import { View, StyleSheet,Text , ScrollView} from "react-native";
import {ListItem,Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const Cart = ({navigation}) => {
    const {carro,total,eliminarCarro}= useContext(ProductosContext);

    return (
        <View style={styles.container}>
            <ScrollView>
        {
            carro.length>0
            ?
            carro.map((a,i)=>(
                <ListItem key={i} bottomDivider style={{marginTop:10, textAlign:'center', fontSize:20, width:300}}>
                    <ListItem.Content style={{width:300}}>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>${(a.precio)}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View >
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminarCarro(i,a.precio)}/>
                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay productos {carro.size}</Text>


        }
        <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>Total: ${(total)}</Text>

        <Button
            buttonStyle={styles.buttons}
            onPress={() => {navigation.navigate('Ticket')}}
            title="Comprar"
        />

        </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    },
    buttons:{
        backgroundColor:'gray', 
        color:'black', 
        marginTop:10, 
        borderRadius:10,
        width:300
      },
      header:{
        fontSize:20, 
        textAlign:'center', 
        marginBottom:40
      },
  });
  