import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { getProducts } from '../helpers/mock'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const  idProducto  = '1'
    console.log(idProducto)
 
    useEffect(() => {
        getProducts()
        .then((data) => {
            setProductos(data.find((prod) => prod.id === idProducto))
            })
            .catch((err) => console.log(err))
    }, [])

 console.log(productos)
  return (

    <>
        <ItemDetail productos={productos} />   
    </>
  )  
};
