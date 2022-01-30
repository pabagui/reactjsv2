//import { NavBar } from './components/NavBar/NavBar'
//import { ItemListContainer } from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'




function App() {



/* acá en return tengo que envolver con BrowserRouter de la clase 8 y context de la clase 9*/
  return (

      <div className="App">
        {/*<NavBar/>*/}
        {/*<ItemListContainer greetings= "Hola, bienvenido a K'epe bags"/>*/}
        <ItemDetailContainer/>

      </div>
    
  )
}

export default App;
