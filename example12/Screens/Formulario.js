import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ProductosContext} from '../Context/ProductosContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase'

export default function Formulario({route,navigation}){
    const {status} = route.params;
    const {productos,producto, setProductos,setProducto}= useContext(ProductosContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Producto</Text>

            <Formik
                initialValues={producto}
                onSubmit={(values,{resetForm})=>{
                     firebase.database().ref('Productos/'+producto.codigo).update(producto).then(()=>{
                         alert("Enviado")
                     })
                    const temporal = productos.filter(al=>al.codigo!=producto.codigo);//!==
                    //alert('enviado')
                    setProductos([...temporal,producto]);
                    resetForm({
                        codigo:"",
                        descripcion:"",
                        precio:"",
                        categoria:""                        
                    })
                    navigation.navigate('Listado')

                    console.log(productos) 
                }}
                validate={(values)=>{
                    setProducto(values)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('codigo')}
                            onBlur={handleBlur('codigo')}
                            placeholder="Codigo"
                            value={values.codigo}
                            editable={status==="add"?true:false}
                        />

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('descripcion')}
                            onBlur={handleBlur('descripcion')}
                            placeholder="Descripción"
                            value={values.descripcion}                        

                        />

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('precio')}
                            onBlur={handleBlur('precio')}
                            placeholder="Precio"
                            value={values.precio}
                        />

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.categoria}
                                onValueChange={ (v)=>
                                    setFieldValue('categoria',v)
                                }
                            >
                                <Picker.Item color="grey" label="Genero" value="" />
                                <Picker.Item color="black" label="Hombre" value="Hombre"/>
                                <Picker.Item color="black" label="Mujer" value="Mujer"/>
                            </Picker>
                        </View>    

                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Enviar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                                />

                            }
                        


                        </View>

                    </View>
                )


            }    
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'gray', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });