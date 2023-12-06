import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const productos = [
    {producto1:"Iphone 15 pro max",descripcion:"Descripcion de producto",precio:1800},
    {producto1:"Samsung galaxy S24 ultra",descripcion:"Descripcion de producto",precio:1200},
    {producto1:"Xiaomi redmi note 14 pro 5g",descripcion:"Descripcion de producto",precio:500},
    {producto1:"Nokia 1100",descripcion:"Descripcion de producto",precio:60}
  ]

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer productos={productos}/>
    </ChakraProvider>
  )
}

export default App