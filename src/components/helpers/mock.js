import { productos } from './productosArray'





export const getProducts = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(productos)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )

/*
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

*/

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