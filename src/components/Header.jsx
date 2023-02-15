import Container from 'react-bootstrap/Container';
import { BsCart3 } from "react-icons/bs";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SITE_TITLE } from '../commonConstants';
import { useSelector } from 'react-redux';
import Search from './Search';
import { Link } from 'react-router-dom';

function Header() {
    const cartData = useSelector(state => state.cartReducer)
    const totalCount = Object.values(cartData).reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    // const totalCount = Object.values(cartData).reduce((accumulator, count) => accumulator + count, 0);
    return (<>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">{SITE_TITLE}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to={'/board-member'}>Board Member</Nav.Link>
                        <Nav.Link as={Link} to={'/new-form'}>New Form</Nav.Link>
                        <Nav.Link as={Link} to={"/checkout"}>{totalCount}<BsCart3 /></Nav.Link>
                        <NavDropdown title="Welcome Mahesh" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Search/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}

export default Header;