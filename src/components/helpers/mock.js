import { productos } from './productosArray'


//función 2do intento
export const getProducts = () => {
   
    return new Promise((res, rej) => {
        let condition=true
        if(condition) {
            setTimeout(() => res(productos), 2000)
            }else{
            rej('404 not found')
        }
    })
}



/*
 //función tutor
export const getFetch = () => {
   
    return new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos), 2000)
    })
}

*/


/* //función desafío anterior
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
*/