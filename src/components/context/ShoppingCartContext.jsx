import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {

    const comision = "react en coderhouse"





    return(
        <CartContext.Provider value={{comision}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider;

