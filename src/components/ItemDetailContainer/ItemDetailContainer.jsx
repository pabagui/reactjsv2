import React, { useState, useEffect } from 'react';
import { getFetch } from '../helpers/mock'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const productoId = 1

    useEffect(() => {
        getFetch()
        .then((data) => {
            setProductos(data.find((item) => item.id === productoId))
            })
            .catch((err) => console.log(err))
    }, [])

 
  return (

    <>
        <ItemDetail productos={productos} />   
    </>
  )  
};
