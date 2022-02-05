import React, { useState } from 'react';
//import { productos } from '../helpers/productosArray'
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'




export const ItemDetail = ({productos}) => {
  const { name, title, stock, price, pictureUrl } = productos
  const [contador, setContador] = useState(0)


  function onAdd(cant) {
    console.log(cant)
    setContador(cant)
}
  return (
      <>   
            <div className='card w-25 mt-5'>
                        <div className='card-header'>
                          {name} - {title}
                        </div>
                        <div className='card-body'>
                          <img src={pictureUrl} alt='alforja' className='w-50'/>
                          ${price}
                          <h5>Stock: {stock}</h5>                      
                        </div>
                        <div>
                          {contador === 0 ?
                              <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                            :
                              <>
                                <Link to='/cart'>
                                  <Button variant="dark">Finalizar compra</Button>
                                </Link>
                                <Link to='/'>
                                  <Button variant="dark">Ver más productos</Button>
                                </Link>
                              </>
                          }
                          
                        </div>
            </div>
      </>
  )
};
 
