import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() { return useContext(cartContext)} 

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item) => {
        setCartList([...cartList, item])
    }

    const removeItem = (item, quantity) => {
        setCartList([...cartList, item, quantity])
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