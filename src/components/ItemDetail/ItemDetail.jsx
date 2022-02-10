import { useState } from 'react';
//import { productos } from '../helpers/productosArray'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useCartContext } from '../../context/cartContext';




export const ItemDetail = ({products}) => {
  //const { name, title, stock, price, pictureUrl } = productos
  const [contador, setContador] = useState(0)
  const { cartList , addItem } = useCartContext()


  function onAdd(cant) {
    console.log(cant)
    addItem({item: products, quantity: cant}) //usar en el desafío addItem({item: productos, quantity: cant})
    setContador(cant)
}

  console.log(cartList)

  return (
      <>   
            <div className='card w-25 mt-5'>
                        <div className='card-header'>
                          {products.name} - {products.title}
                        </div>
                        <div className='card-body'>
                          <img src={products.pictureUrl} alt='alforja' className='w-50'/>
                          ${products.price}
                          <h5>Stock: {products.stock}</h5>                      
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
 
