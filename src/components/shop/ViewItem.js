import { ItemCount } from "./itemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./cart/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




export const ViewItem = ({ id, name, img, descrip, price, cant }) => {

    const [cantidad, setCantidad] = useState(0)


    const { agregarAlCarrito, isInCart } = useContext(CartContext)// CartContext es un componente donde se renderiza el carrito



    /* creo estado para controlar la cantidad*/
    const handleAgregar = () => {
        if (cantidad === 0) return //early return, se utiliza para los casos de excepcion para q no suceda nada 

        if (!isInCart(id)) {
            const addItem = {
                id, name, price, cant, cantidad,img
            }
            //handle para agregar uno con las propiedades del objeto

            agregarAlCarrito(addItem)
        }
    }


    return (

        <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text> {descrip} </Card.Text>
            </Card.Body>

            <Card.Body>
                {
                    isInCart(id) ? <Link to="/cart">
                    <Button variant="success">Ir al carrito</Button>
                     
                        
                    </Link> :

                        <>
                            <ItemCount
                                max={cant}
                                counter={cantidad}
                                setCounter={setCantidad}

                            />
                            <Button variant="outline-success" style={{ marginTop: '2rem'}} onClick={handleAgregar} disabled={cantidad === 0}>Agregar al carrito</Button>
                        </>

                }
            </Card.Body>
        </Card>





        /*
        <div className="containerView">

            <div className="tittleImage">
                <h3>{name}</h3>
                <img src={img} />
            </div>

            <div className="description">
                <h4>DESCRIPCION</h4>
                <p>{descrip}</p>
                <p> $ {price}</p>
                {
                    isInCart(id) ? <Link to="/cart" className="termComp">
                        Finalizar mi compra
                    </Link> :

                        <>
                            <ItemCount
                                max={cant}
                                counter={cantidad}
                                setCounter={setCantidad}

                            />

                            <button className="btnAgregar" onClick={handleAgregar} disabled={cantidad === 0}> Agregar al carrito</button> 
                        </>

                }


            </div>


        </div>*/
    )


}


