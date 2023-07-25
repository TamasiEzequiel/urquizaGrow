import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './cart/CartContext'

export const CartWidget = () => {

    const { cantidadCart, cart } = useContext(CartContext) // aca le digo q consuma la prop cantidadCart del cartcontext

    return (

        <div className='cartWidget'>
        <Link to="/cart" >
            
            <img src='\img\cartBong.png'></img>
            <span>{cantidadCart()}</span>
        </Link>
        </div>
    )
}

// className={cart.length === 0 ? 'cartWidget cartHidden' : 'cartWidget'} <BsMinecartLoaded />