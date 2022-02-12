import { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import { getProducts } from '../helpers/mock';
import { ItemDetail } from '../ItemDetail/ItemDetail';



//import { productos } from '../helpers/productosArray'


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const idProducto = '1'
    //const { idProducto } = useParams()
    console.log(products)
 
    useEffect(() => {
        getProducts
        .then(res => setProducts(res.find(products => products.id === idProducto)))
        .catch(err => console.log(err))
    }, [])

 console.log(products)
  return (

    <>
        <ItemDetail products={products} />   
    </>
  )  
};
