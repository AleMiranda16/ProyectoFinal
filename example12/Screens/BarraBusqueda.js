import React, { useState,useContext} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {ListItem} from 'react-native-elements';
import {ProductosContext} from '../Context/ProductosContext';

export default function DescripcionScreen() {
    const {productos}= useContext(ProductosContext);
    const [lista, setLista]= useState([]);
        const [search, setSearch]= useState([]);
  
        const updateSearch=(search)=>{
            setSearch(search);
            const temporal = productos.filter((selected)=>{
                return selected.descripcion===search;
            })
            setLista(temporal)
        }

      return (
        <View style={styles.container}>
        <SearchBar
          placeholder="Escribe una descripción..."
          onChangeText={(itemValue) => updateSearch(itemValue)}
          value={search}
        />
        <ScrollView>
        {
            lista.length>0
            ?
            lista.map((a,i)=>(
                <ListItem key={i} bottomDivider style={{marginTop:10, textAlign:'center', fontSize:20, width:350}}>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion} [Codigo: {a.codigo} ]</ListItem.Title>
                        <ListItem.Subtitle>${a.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay productos</Text>

        }

        </ScrollView>
        </View>
      );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});