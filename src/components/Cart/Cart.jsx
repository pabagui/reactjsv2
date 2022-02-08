
import { useCartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button'

const Cart = () => {

  const { cartList, clear } = useCartContext()

  return <div className="container w-50">
    { cartList.map(producto => <li>{producto.title} {producto.name}, Precio: ${producto.price}, Cantidad: {producto.quantity}</li> ) }
    <Button variant="dark" onClick={clear}>Vaciar canasta</Button>
  </div>;
};

export default Cart;
