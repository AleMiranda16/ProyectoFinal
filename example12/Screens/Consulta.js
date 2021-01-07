import React, { useState,useContext} from "react";
import { View, Picker, StyleSheet,Text , ScrollView} from "react-native";
import {ListItem} from 'react-native-elements';
import {ProductosContext} from '../Context/ProductosContext';

const Consulta = () => {
    const {productos}= useContext(ProductosContext);
    const [listaSelected, setListaSelected]= useState([]);

    const addSelect=(t)=>{
        const temporal = productos.filter((selected)=>{
            return selected.categoria===t;
        })
        setListaSelected(temporal)
    }
    return (
        <View style={styles.container}>
            <Picker
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => addSelect(itemValue)}
            >
                <Picker.Item label="Genero" value="" />
                <Picker.Item label="Hombre" value="Hombre" />
                <Picker.Item label="Mujer" value="Mujer" />
            </Picker>
            <ScrollView>
        {
            listaSelected.length>0
            ?
            listaSelected.map((a,i)=>(
                <ListItem key={i} bottomDivider style={{marginTop:10, textAlign:'center', fontSize:20, width:350}}>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>{a.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay prendas</Text>


        }


        </ScrollView>
        </View>
    )
}

export default Consulta

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });
  