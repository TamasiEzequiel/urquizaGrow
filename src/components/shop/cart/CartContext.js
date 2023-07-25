import { createContext, useState } from "react"


export const CartContext = createContext() //CONTEXTO PARA RENDERIZAR CARRITO CON EN ICON EN CUALQUIER PESTAÑA

export const CartProvider = ({children}) => { //recibe por props los children (toda la app)pa su renderizado y uso

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
      
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
  
      return cart.some((prod) => prod.id === id)
    }
  
    const cantidadCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0) //retorna la suma de la prop cantidad de los elementos del cart
    }
  
    const totalCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0) //retorna la suma de la prop cantidad de los elementos del cart
    }
  
  
    const vaciarCart = () => {
        setCart([])
    }

    const eliminarItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id ))
    }
    return(
        <CartContext.Provider value={
            {//coloco las fn relacionadas al cart como referencia
              cart,
              agregarAlCarrito,
              isInCart,
              cantidadCart,
              totalCart,
              vaciarCart,
              eliminarItem
      
      
            }
          }>

          {children}


        </CartContext.Provider>
    )
}