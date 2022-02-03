import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'




function App() {



/* acá en return tengo que envolver con BrowserRouter de la clase 8 y context de la clase 9*/
  return (

    <BrowserRouter>
        <div className="App">
            <NavBar /> {/* no se envuelve en Routes porque está fija en todas las páginas*/}
            <Routes>  {/* sirve para envolver componentes que se navegan */}
                <Route exact path='/' element={<ItemListContainer />} /> {/* Route vincula una ruta con un componente*/}
                <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
                <Route exact path='/item/:idProducto' element={<ItemDetailContainer greetings= "Hola, bienvenido a K'epe bags"/>} />
                <Route exact path='/cart' element={<Cart />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
