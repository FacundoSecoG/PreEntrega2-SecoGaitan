import React, { useState, useEffect } from "react"
import { collection, getDocs, getFirestore, snapshotEqual } from "firebase/firestore"

const Collection = () => {
    const [products, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "Telefonos")

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProductos(docs)
            console.log(docs)
        })
    }, [])
    return (
        <div>
            {
                products.map((p, index) => (
                    <div key={index + 1}>
                        <h2>{p.producto}</h2>
                        <h3>{p.precio}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Collection