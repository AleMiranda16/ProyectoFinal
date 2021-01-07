import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const ProductosContext = createContext();

const ProductosProvider = (props)=>{
    const [producto, setProducto]= useState({
        codigo:"",
        descripcion:"",
        precio:"",
        categoria:""        
    })
    const [productos, setProductos] = useState([]);

    const [lista, setLista]= useState([]);
    
        useEffect(()=>{
            firebase.database().ref('Productos').on('value', snapshot=>{
                let listaProductos=[];
                snapshot.forEach(row=>{
                    listaProductos.push({
                        codigo:row.key,
                        descripcion:row.val().descripcion,
                        precio:row.val().precio,
                        categoria:row.val().categoria                        
                    })
                })
                setProductos(listaProductos)
            })
        },[])
    
        const eliminar =(codigo)=>{
            firebase.database().ref('Productos/'+codigo).set(null).then(()=>{
                alert("Eliminado")
            })
    
            const temporal = productos.filter((item)=>{
                return item.codigo!== codigo;
            })
            setLista(temporal)
        }

    const [carro, setCarro]= useState([]);
    
    const [total, setTotal]= useState([]);

    const agregarCarro =(producto,precio)=>{
        alert("Añadiste un producto")
        setCarro([...carro,producto])
        setTotal(Number(total)+Number(precio))
        console.log(carro)
    }

    const eliminarCarro =(index,precio)=>{

        const temporal = carro.filter((a,i)=>i!==index)

        setCarro(temporal)
        setTotal(Number(total)-Number(precio))
    }

    
    return(
        <ProductosContext.Provider
            value={{
                productos,
                producto,
                carro, 
                total,
                lista,
                setLista,
                setProductos,
                setProducto,
                setCarro,
                setTotal,
                eliminar,
                agregarCarro,
                eliminarCarro
            }}
        >
            {props.children}

        </ProductosContext.Provider>
    )
}

export default ProductosProvider;