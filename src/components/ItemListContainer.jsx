import { useEffect, useState } from 'react'
import { query, collection, doc, getDoc, getDocs, getFirestore, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
//import ItemCount from './ItemCount'
import { ItemList } from './ItemList'



export const ItemListContainer = ( {greetings}) => {
    // console.log(props) == console.log( {greetings} ), es la call back con destructuring de la props
    const [products, setProducts] = useState([])
    //const [product, setProduct] = useState({}) //getDoc trae objeto (1), no array. getDocs trae muchos (array)
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'items') //comentado porque cuando filtro lo pongo dentro del queryFilter

        const queryFilter = query(queryCollection, where('price', '<=', 50000)) //se usa para categorías
        

        getDocs(queryFilter)
        //getDocs(queryCollection) se usaba cuando solo tenía items, no categorías de productos  
        .then(resp => setProducts( resp.docs.map(prod =>( { id: prod.id, ...prod.data() }) ) ))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
/*        
//usar en itemdetail
        const db = getFirestore() //crea conexión con firestore
        const itemRef = doc(db, 'items', '6rpehHEzKg2ugWczKAbV') //de la conexión con firestore trae la colección item y dentro, el objeto con ese id
        getDoc(itemRef) //promesa que trae el objeto
        .then(resp => setProduct( { id: resp.id, ...resp.data()} )) //con función data obtengo todos los datos del objeto
        //con el then guardo la respuesta
*/

    }, [])

    //console.log(product)
    console.log(products)
 
    return (
        <div>
            <h1>ITEMLIST</h1>
            <p>{ greetings }</p>
            <ItemList />
            {/* //en los primeros desafíos estaba acá el botón contador. Ahora en ItemDetail
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>   
            */}                   
        </div>
    )
}
