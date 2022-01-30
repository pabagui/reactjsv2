import React from 'react';
//import { productos } from '../helpers/productosArray'
import 'bootstrap/dist/css/bootstrap.min.css'




export const ItemDetail = ( productos ) => {
  const { name, title, stock, price, pictureUrl } = productos
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
            </div>
      </>
  )
};


/* //función tutor
export const ItemDetail = ( props ) => {
  const { name, title, stock, price, pictureUrl } = props.product
  return (
      <>   
      <h1>{name}</h1>
      <h4>{title}</h4>
      <h4>{stock}</h4>
      <h4>{price}</h4>
      <h4>{pictureUrl}</h4>
      </>
  )
  }
  */