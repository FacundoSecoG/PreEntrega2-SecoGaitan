import {React, useState, useEffect} from 'react' 

const DataContainer = () => {
    const getProductos = async () => {
        const reponse = await fetch('https://fakestoreapi.com/products/')
        const data = await response.json()
        return data
    }

    const [productos,setProductos] = useState([])
    console.log(productos)

    useEffect(()=>{
        getProductos().then((product)=>setProductos(product))
    },[])

    return (
        productos.map((p)=>{
            return(
                <dataPresentatio
                title={p.title}
                descripcion={p.descripcion}
                price={p.price}
                />
            )
        })
    )
}

export default DataContainer