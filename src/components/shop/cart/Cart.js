import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

import { Button } from "react-bootstrap"


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    return (
        <div className="cartPage">
            <h2>Compra</h2>

            {
                cart.map((item) => (
                    <div className="cardCart" key={item.id}>
                        <img src={item.img} />
                        <div className="rowOrderText">
                            <h4 id="cardCartTittle">{item.name}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>$ {item.cantidad * item.price}</p>
                        </div>
                        <Button variant="outline-danger" className="btnDelete" onClick={() => eliminarItem(item.id)}> Borrar
                        </Button>
                    </div>
                ))

            }

            <h3>Total: ${totalCart()} </h3>

            <div className="vaciarCart">
              <Button variant="success" className="btnTcompra"> <Link to="/checkout" > Pagar</Link> </Button>
                <Button variant="outline-warning" size="sm" className="btnVCart" onClick={vaciarCart}> Vaciar Carrito</Button>
                
            </div>
        </div>
    )
}