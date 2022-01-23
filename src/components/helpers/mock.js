import { productos } from './productosArray'

export const getFetch = new Promise( (res,rej)=>{
        let condition=true
        if(condition) {
            setTimeout(()=>{
            res(productos)
            }, 2000)          
        }else{
            rej('404 not found')
        }
    })