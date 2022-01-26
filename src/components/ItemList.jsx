import React, { useEffect, useState } from 'react'
import { getFetch } from './helpers/mock'
//import Button from 'react-bootstrap/Button'
import { Item } from './Item'
//import { Item } from './Item'


/*
const task = new Promise( (res,rej)=>{
    let condition=true
    if(condition) {
        setTimeout(()=>{

        }, 2000)
        
        res([{id: '1', nombre: 'alforja', price: 55000}])
    }else{
        rej('404 not found')
    }
})
*/

/*
export function ItemList() {
 // Desarrolla la vista utilizando un array de items y un map
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true) //para mostrar mensaje de "cargando...""
*/
/*
    getFetch
    .then(res => setProducts(res))
    .catch(err => console.log(err))
    //.then(respuesta => console.log(respuesta))
    .finally(()=> console.log('si o si al final'))
*/
/*
    useEffect(() => {
        getFetch
        .then(res => setProducts(res))
        .catch(err => console.log(err))
        //.then(respuesta => console.log(respuesta))
        .finally(()=> setLoading(false)) //para que deje de mostrar el mensaje "cargando..."
        }, [])

    //console.log(products)
    return (
        <div>
            { loading ? <h2>Cargando página...</h2> :
                                            products.map( (products) =>
                                            <div
                                                key={products.id}
                                                className='col-md-4'
                                            >
                                                        <div className='card w-100 mt-5'>
                                                            <div className='card-header'>
                                                                {`${products.name}`} - {`${products.title}`}
                                                            </div>
                                                            <div className='card-body'>
                                                            <img src={products.pictureUrl} alt='alforja' className='w-50'/>
                                                            {products.price}
                                                            </div>
                                                            <div className='card-footer'>
                                                                <Button variant="dark">
                                                                    detalle del producto
                                                                </Button>
                                                            </div>
                                                        </div>
                                            </div> 
            ) }
        </div>
    )

}
*/

export function ItemList() {
    // Desarrolla la vista utilizando un array de items y un map
       const [products, setProducts] = useState ([])
       const [loading, setLoading] = useState(true) //para mostrar mensaje de "cargando...""
   
   /*
       getFetch
       .then(res => setProducts(res))
       .catch(err => console.log(err))
       //.then(respuesta => console.log(respuesta))
       .finally(()=> console.log('si o si al final'))
   */
   
       useEffect(() => {
           getFetch
           .then(res => setProducts(res))
           .catch(err => console.log(err))
           //.then(respuesta => console.log(respuesta))
           .finally(()=> setLoading(false)) //para que deje de mostrar el mensaje "cargando..."
           }, [])
   
       //console.log(products)
       return (
           <div>
               { loading ? <h2>Cargando página...</h2> :
                                               products.map( (el) =>
                                               
                                               <Item
                                               key= {el.id}
                                               name= {el.name}
                                               title= {el.title}
                                               stock= {el.stock}
                                               price= {el.price}
                                               pictureUrl= {el.pictureUrl}
                                               
                                               /> 
               ) }
           </div>
       )
   
   }