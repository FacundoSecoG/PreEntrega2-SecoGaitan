import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const productos = [
    {producto1:"A",descripcion:"Descripcion de producto",precio:1000},
    {producto1:"B",descripcion:"Descripcion de producto",precio:1200},
    {producto1:"C",descripcion:"Descripcion de producto",precio:1300},
    {producto1:"D",descripcion:"Descripcion de producto",precio:1400}
  ]

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer productos={productos}/>
    </ChakraProvider>
  )
}

export default App