import React from 'react'
import ItemCount from './ItemCount'
import { ItemList } from './ItemList'





export const ItemListContainer = ( {greetings}) => {
    // console.log(props) == console.log( {greetings} ), es la call back con destructuring de la props

    function onAdd(cant) {
        console.log(cant)
    }

    return (
        <div>
            <h1>ITEMLIST</h1>
            <p>{ greetings }</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/> 
            <ItemList />          
        </div>
    )
}
