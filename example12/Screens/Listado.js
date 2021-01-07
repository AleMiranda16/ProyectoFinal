import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductosContext} from '../Context/ProductosContext';

const Listado = ({navigation}) => {

    const {productos,setProducto,eliminar} = useContext(ProductosContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Lista Prendas', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add', color: '#fff', onPress:()=>{
                setProducto({
                     codigo:null,
                     precio:"",
                     categoria:"",
                     descripcion:"",
                 })   

                 navigation.navigate('Agregar',{status:"add"})

            }}}
            containerStyle={{backgroundColor:'#1f2ab9'}}
        />
        <ScrollView>
        {
            productos.length>0
            ?
            productos.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>{a.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='md-search' size={30} color={'gray'} onPress={()=>{
                            setProducto({
                                codigo:a.codigo.toString(),
                                precio:a.precio.toString(),
                                categoria:a.categoria,
                                descripcion:a.descripcion,
                            })
                            navigation.navigate('Producto')}}/>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.codigo)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setProducto({
                                codigo:a.codigo.toString(),
                                precio:a.precio.toString(),
                                categoria:a.categoria,
                                descripcion:a.descripcion,
                            })

                            navigation.navigate('Agregar',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay Productos</Text>

        }

        </ScrollView>


    </View>
    );
}
 
export default Listado;

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