import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart'
import Products from './components/Products'
import FooterContainer from './components/FooterContainer';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
return (
  <BrowserRouter>
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Products' element={<Products/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/Cart' element={<Cart />} />
        <Route exact path='/ItemDetail/:id' element={<ItemDetail/>} />
        <Route exact path='/Category/:category' element={<ItemListContainer />} />
      </Routes>
      <FooterContainer />
    </ChakraProvider>
  </BrowserRouter>
)
}

export default App