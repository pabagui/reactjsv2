import React from 'react'
import { ItemCountPos, ItemCountNeg } from './ItemCount'

export const ItemListContainer = ( {greetings}) => {
    // console.log(props) == console.log( {greetings} ), es la call back con destructuring de la props
    return (
        <div>
            <h1>ITEMLIST</h1>
            <p>{ greetings }</p>
            <ItemCountPos/>
            <ItemCountNeg/>

        </div>
    )
}
