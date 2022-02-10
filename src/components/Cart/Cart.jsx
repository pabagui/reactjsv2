
import { useCartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button'

const Cart = () => {

  const { cartList, removeItem, clear } = useCartContext()

  return <div className="container w-50"> 
  
    { cartList.map(producto => 
    <>
    <li>{producto.item.title} {producto.item.name}, Precio: ${producto.item.price}, Cantidad: {producto.quantity}</li>
    <Button variant="danger" onClick={() => removeItem(producto.item.id)}>x</Button>
    </> 
    ) }
    <Button variant="dark" onClick={clear}>Vaciar canasta</Button>
    </div>
};


export default Cart;
