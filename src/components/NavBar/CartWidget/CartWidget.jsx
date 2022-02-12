import React from 'react'
import { useCartContext } from '../../../context/cartContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'


export const CartWidget = () => {

    const { cantidad } = useCartContext()

    return (
        <div className="w-25">
            <img src="/cesta-de-la-compra.png" alt="cesta de compras" className="w-25"/>
            <Badge bg="danger">{ cantidad() !== 0 && cantidad() }</Badge>
            <span className="visually-hidden">unread messages</span>
        </div>
    )
}
