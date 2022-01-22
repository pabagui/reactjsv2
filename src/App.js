import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings= "Hola, bienvenido a K'epe bags"/>
    </div>
  )
}

export default App;
