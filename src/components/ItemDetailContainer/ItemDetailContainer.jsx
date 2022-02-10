import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getProducts } from '../helpers/mock';
//import { useParams } from 'react-router-dom';

//import { productos } from '../helpers/productosArray'


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const idProducto = '1'
    console.log(idProducto)
 
    useEffect(() => {
        getProducts
        .then(res => setProducts(res.find(prod => prod.id === idProducto)))
        .catch(err => console.log(err))
    }, [])

 console.log(products)
  return (

    <>
        <ItemDetail products={products} />   
    </>
  )  
};
