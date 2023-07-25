import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"



export const CardItem = ({ id, name, price, img, }) => {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><p>{"$" + price}  </p>
                </Card.Text>
                <Link to={`/detail/${id}`}>
                <Button variant="outline-info">
                    Ver mas</Button>
                </Link>
            </Card.Body>
        </Card>






    )
}