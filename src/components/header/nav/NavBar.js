import { Link } from 'react-router-dom';
import { CartWidget } from '../../shop/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export const NavBar = () => {

    return (
        <>

            <Navbar bg="light" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Urquiza Grow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/education'> Cultivando la educacion</Link></Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to='/shop'>Todos los productos</Link> </NavDropdown.Item>
                                <NavDropdown.Item > <Link to='/shop/semillas'> Semillas </Link></NavDropdown.Item>
                                <NavDropdown.Item > <Link to='/shop/floracion'>Floracion </Link> </NavDropdown.Item>
                                <NavDropdown.Item ><Link to='/shop/accesorios'>Accesorios</Link></NavDropdown.Item>
                            </NavDropdown>
                        
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
                
            </Navbar>


            





        </>
    )
}

