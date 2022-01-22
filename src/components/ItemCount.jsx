
import React from 'react';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

function ItemCount({ initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial)

    const handlerAdd = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const handlerMinus = () => {
        if (counter > initial){
            setCounter(counter - 1)
        }       
    }

    const addCart = () => {
        onAdd(counter)
    }

  return <div className="container w-50">
            <Button variant="dark" onClick={ handlerAdd }> + </Button>
            <Badge bg="danger">{ counter }</Badge>
            <Button variant="dark" onClick={ handlerMinus }> - </Button><br/>
            <Button variant="dark" onClick={ addCart }> Agregar al canasto </Button> 
         </div>;
};

export default ItemCount;


/*
//ejercicio que también funciona, pero sin uso de onAdd
  function ItemCount({ initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial)

    const handlerAdd = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const handlerMinus = () => {
        if (counter > initial){
            setCounter(counter - 1)
        }       
    }

    const addCart = () => {
        onAdd(counter)
    }

    return (
        <Div className="container w-50">
        <Button className="btn btn-primary" onClick={ handlerAdd }> + </Button>       
        <Badge bg="secondary">{ count }</Badge>
        <Button className="btn btn-primary" onClick={ handlerMinus }> - </Button><br/>
        <Button className="btn btn-primary"> onClick={ addCart }Agregar al canasto </Button> 
        <Div/>
    )
}


export default ItemCount

*/


