import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button'

const Cart = () => {

  const { cartList, removeItem, clear, totalCart } = useCartContext()

    return <div className="container w-50"> 
      {cartList.length !== 0 ? <>
        { cartList.map(product => 
        <li>{product.item.title} {product.item.name}, Precio: ${product.item.price}, Cantidad: {product.quantity}
        <Button variant="danger" onClick={() => removeItem(product.item.id)}>x</Button>
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
