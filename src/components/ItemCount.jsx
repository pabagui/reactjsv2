
import {useState} from 'react'

let stockItem= 10

export function ItemCountPos() {
        const [count, setCount] = useState( 0 )

        const handlerCount = () => {
            setCount( count+1)
        }

        return (
            <div>              
                <button id="sumar" onClick={ handlerCount }>Agregar al canasto</button>              
                <span>{count}</span>
                <button id="restar" onClick={ handlerCount }>Quitar del canasto</button> 
            </div>
        )
}

export function ItemCountNeg() {
        const [count, setCount] = useState( 10 )

        const handlerCount = () => {
            setCount( count-1)
        }

        return (
            <div>              
                <button id="restar" onClick={ handlerCount }>Quitar del canasto</button>              
                {count}
            </div>
        )
}