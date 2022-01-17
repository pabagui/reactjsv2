
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export function ItemCount() {
        const [count, setCount] = useState( 0 )
        let stockItem= 5

        const handlerAdd = () => {
            //let stockItem= 5

            if(count < stockItem) {
                setCount(count+1)
            } else {
                alert("unidades máximas de compra")
            }            
        }

        const handlerRemove = () => {
            //let minStockItem= 1
            if (count < 1) {
                alert("canasto vacío")
            }else {
                setCount( count-1)
            }            
        }

        return (
            <div>              
                <Button onClick={ handlerAdd } className="primary">Agregar al canasto</Button>
                <Badge bg="secondary">{ count }</Badge>
                <Button onClick={ handlerRemove }>Quitar al canasto</Button>
            </div>
        )
}

/*
export function ItemCountNeg() {
        const [count, setCount] = useState( 0 )

        const handlerCount = () => {
            let minStockItem= 1
            if (count < minStockItem) {
                console.log("canasto vacío")
            }else {
                setCount( count-1)
            }            
        }

        return (
            <div>              
                <button id="restar" onClick={ handlerCount }>Quitar del canasto</button>              
                {count}
            </div>
        )
        
}
*/