import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'

export const CartWidget = () => {
    return (
        <div className="w-25">
            <img src="/cesta-de-la-compra.png" alt="cesta de compras" className="w-25"/>
            <Badge bg="danger">5</Badge>
            <span className="visually-hidden">unread messages</span>
        </div>
    )
}
