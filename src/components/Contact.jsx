import React from 'react'
import CategoryTagApertura from './CategoryTagsApertura'
import CategoryTagCierre from './CategoryTagsCierre'

const Contact = () => {
    return (
        <div>
            <div className="align-self-start">
                <CategoryTagApertura>Contacto</CategoryTagApertura>
            </div>
            contacto
            <div className="align-self-end">
                <CategoryTagCierre>Contacto</CategoryTagCierre>
            </div>
        </div>
    )
}

export default Contact