import React from 'react';
import { productos } from './helpers/productosArray'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export function Item() {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }


  return (
                    <div className='card w-100 mt-5'>
                        <div className='card-header'>
                            {`${productos.name}`} - {`${productos.title}`}
                        </div>
                        <div className='card-body'>
                        <img src={productos.pictureUrl} alt='alforja' className='w-50'/>
                        {productos.price}
                        </div>
                        <div className='card-footer'>
                            <Button variant="dark">
                                detalle del producto
                            </Button>
                        </div>
                    </div>
          )
        
}
