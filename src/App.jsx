import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
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
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        {isLoading ? <Loader /> : (
          <>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Home' element={<Home />} />
              <Route exact path='/Products' element={<Products />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/Cart' element={<Cart />} />
              <Route exact path='/ItemDetail/:id' element={<ItemDetailContainer />} />
              <Route exact path='/Category/:category' element={<ItemListContainer />} />
            </Routes>
            <FooterContainer />
          </>
        )}
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;