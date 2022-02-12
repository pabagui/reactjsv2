import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button'

const Cart = () => {

  const { cartList, removeItem, clear, totalCart } = useCartContext()

    return <div className="container w-50"> 
      {cartList.length !== 0 ? <>
        { cartList.map(producto => 
        <li>{producto.item.title} {producto.item.name}, Precio: ${producto.item.price}, Cantidad: {producto.quantity}
        <Button variant="danger" onClick={() => removeItem(producto.item.id)}>x</Button>
        </li> 
        )}
        {`El total de tu compra es $${totalCart()}`}
        <Button variant="dark" onClick={clear}>Vaciar canasta</Button>
        </>     
        :
        <>
        <span>Canasta vacía</span>
        <Link to='/'>
           <Button variant="dark">Ver productos en tienda</Button>
        </Link>
        </>
      }
      </div>
};


export default Cart;
