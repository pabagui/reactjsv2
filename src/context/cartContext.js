import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() { return useContext(cartContext)} 

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item) => {
        console.log(item)
        //condición para no repetir productos y mostrar suma de cantidad:
        const index = cartList.findIndex(prod => prod.item.id === item.item.id)
        if (index === -1) {
            setCartList( [ ...cartList, item ])
        } else {
            const cant = cartList[index].quantity
            cartList[index].quantity = item.quantity + cant
            const newCartList = cartList
            setCartList(newCartList)

        }       
        //setCartList([...cartList, item])
    }

    const removeItem = (id) => {
        setCartList(cartList.filter( producto => producto.item.id !== id))
    }

    const clear = () => {
        setCartList([])   
    }

    return (
        <cartContext.Provider 
            value={{
                cartList, 
                addItem, 
                removeItem, 
                clear}}>
               {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider