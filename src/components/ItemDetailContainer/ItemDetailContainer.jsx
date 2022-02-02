import React, { useState, useEffect } from 'react';
import { getProducts } from '../helpers/mock'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const productoId = '1'

    useEffect(() => {
        getProducts()
        .then((data) => {
            setProductos(data.find((item) => item.id === productoId))
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
