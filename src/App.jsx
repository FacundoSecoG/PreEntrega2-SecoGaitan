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
import ProductCategory from './components/ProductCategory';
import ItemDetail from './components/ItemDetail';

const App = () => {
  const productos = [
    { id: "1", categoria: "APPLE", producto: "Iphone 15 pro max", descripcion: "Descripcion de producto", precio: 1800 },
    { id: "2", categoria: "SAMSUNG", producto: "Samsung galaxy S24 ultra", descripcion: "Descripcion de producto", precio: 1200 },
    { id: "3", categoria: "XIAOMI", producto: "Xiaomi redmi note 14 pro 5g", descripcion: "Descripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de producto", precio: 500 },
    { id: "4", categoria: "APPLE", producto: "Iphone 14", descripcion: "Descripcion de producto", precio: 1260 },
    { id: "5", categoria: "APPLE", producto: "Iphone SE (2023)", descripcion: "Nuevo modelo compacto con potente rendimiento.", precio: 699 },
    { id: "6", categoria: "APPLE", producto: "Iphone 14 Pro", descripcion: "Pantalla ProMotion de 120 Hz y cámara mejorada.", precio: 1399 },
    { id: "7", categoria: "APPLE", producto: "Iphone Air", descripcion: "Diseño ultrafino y carga inalámbrica mejorada.", precio: 899 },
    { id: "8", categoria: "APPLE", producto: "Iphone XR 2", descripcion: "Una actualización del popular modelo XR.", precio: 799 },
    { id: "9", categoria: "APPLE", producto: "Iphone SE Plus", descripcion: "Versión ampliada del iPhone SE con doble cámara.", precio: 799 },
    { id: "10", categoria: "SAMSUNG", producto: "Samsung Galaxy Z Fold 4", descripcion: "Teléfono plegable con pantalla AMOLED flexible.", precio: 1999 },
    { id: "11", categoria: "SAMSUNG", producto: "Samsung Galaxy S25", descripcion: "Rendimiento mejorado y nueva tecnología de cámara.", precio: 1299 },
    { id: "12", categoria: "SAMSUNG", producto: "Samsung Galaxy A73", descripcion: "Modelo de gama media con gran autonomía de batería.", precio: 499 },
    { id: "13", categoria: "SAMSUNG", producto: "Samsung Galaxy M32", descripcion: "Smartphone asequible con pantalla Super AMOLED.", precio: 299 },
    { id: "14", categoria: "SAMSUNG", producto: "Samsung Galaxy Note 11", descripcion: "Regreso de la serie Note con S Pen mejorado.", precio: 1099 },
    { id: "15", categoria: "XIAOMI", producto: "Xiaomi Mi 12", descripcion: "Procesador Snapdragon 8cx y carga ultra rápida.", precio: 899 },
    { id: "16", categoria: "XIAOMI", producto: "Xiaomi Poco X5", descripcion: "Excelente relación calidad-precio con cámara versátil.", precio: 349 },
    { id: "17", categoria: "XIAOMI", producto: "Xiaomi Redmi 10 Pro", descripcion: "Batería de larga duración y pantalla de 90 Hz.", precio: 449 },
    { id: "18", categoria: "XIAOMI", producto: "Xiaomi Mi Mix 5", descripcion: "Innovador diseño sin marcos y cámara bajo la pantalla.", precio: 1199 },
    { id: "19", categoria: "XIAOMI", producto: "Xiaomi Black Shark 4", descripcion: "Teléfono gaming con potente rendimiento.", precio: 599 },
    { id: "20", categoria: "APPLE", producto: "Iphone 13 Mini", descripcion: "Compacto pero poderoso con cámara avanzada.", precio: 699 },
    { id: "21", categoria: "SAMSUNG", producto: "Samsung Galaxy A52s", descripcion: "Gama media con pantalla Super AMOLED y 5G.", precio: 449 },
    { id: "22", categoria: "XIAOMI", producto: "Xiaomi Redmi Note 11T", descripcion: "Versión mejorada con conectividad 5G.", precio: 299 },
    { id: "23", categoria: "APPLE", producto: "Iphone 12 Pro Max", descripcion: "Potente rendimiento y sistema de cámara Pro.", precio: 1299 },
    { id: "24", categoria: "SAMSUNG", producto: "Samsung Galaxy S21 FE", descripcion: "Edición especial con características premium.", precio: 799 },
    { id: "25", categoria: "XIAOMI", producto: "Xiaomi Mi 11 Lite", descripcion: "Diseño delgado y ligero con pantalla AMOLED.", precio: 349 },
    { id: "26", categoria: "APPLE", producto: "Iphone XR", descripcion: "Modelo asequible con Face ID y pantalla Liquid Retina.", precio: 599 },
    { id: "27", categoria: "SAMSUNG", producto: "Samsung Galaxy M42", descripcion: "Opción asequible con batería de larga duración.", precio: 349 },
    { id: "28", categoria: "XIAOMI", producto: "Xiaomi Redmi 9A", descripcion: "Smartphone básico con gran autonomía de batería.", precio: 149 },
    { id: "29", categoria: "APPLE", producto: "Iphone 11", descripcion: "Excelente rendimiento con sistema de doble cámara.", precio: 699 },
    { id: "30", categoria: "SAMSUNG", producto: "Samsung Galaxy A02s", descripcion: "Económico pero funcional con triple cámara.", precio: 199 },
  ];
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Routes>
        <Route exact path='/MiPrimer-ECommerce/' element={<Home productos={productos}/>} />
          <Route exact path='/MiPrimer-ECommerce/Home' element={<Home productos={productos} />} />
          <Route exact path='/MiPrimer-ECommerce/Products' element={<Products productos={productos}/>} />
          <Route exact path='/MiPrimer-ECommerce/about' element={<About />} />
          <Route exact path='/MiPrimer-ECommerce/contact' element={<Contact />} />
          <Route exact path='/MiPrimer-ECommerce/Cart' element={<Cart />} />
          <Route exact path='/MiPrimer-ECommerce/ItemDetail/:id' element={<ItemDetail productos={productos}/>} />
          <Route exact path='/MiPrimer-ECommerce/Category/:Category' element={<ProductCategory productos={productos}/>} />
        </Routes>
        <FooterContainer />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App