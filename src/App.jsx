
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {


  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<chocolate />} />
          <Route exact path="/products" element={<nieve />} />
          <Route exact path="/contact" element={<premium />} />
        </Routes>
      <ItemListContainer/>
    </BrowserRouter>

  )
}

export default App
