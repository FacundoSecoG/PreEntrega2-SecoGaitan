import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"

const App = () => {

  const [greeting,setGreeting] = useState("¡Bienvenidos al Tuki E-Commerce")

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </ChakraProvider>
  )
}

export default App