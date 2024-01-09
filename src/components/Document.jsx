import { React, useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const Document = () => {
    const {id} = useParams()
    const [product, setProducto] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "zapatos", `${id}`)

        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const doc = snapshot.data()
                setProducto(doc)
            }
        })
    }, [])
    return (
        <div>
            Producto:{product.nombre}
            precio:{product.precio}
        </div>
    )
}

export default Document