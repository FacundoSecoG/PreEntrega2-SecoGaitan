import { useState } from "react"
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {

  const [mensaje,setMensaje] = useState("Bienvenidos a mi E-Commerce")

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer mensaje={mensaje}/>
    </ChakraProvider>
  )
}

export default App