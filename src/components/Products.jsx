import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import CartButton from './CartButton';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../redux/actions/productActions';
import { useEffect } from "react";
import { setValue } from '../redux/actions/cartActions';



const Products = () => {

    const dispatch = useDispatch(); //dispatcher to action

    const {products, searchTerm} = useSelector((state) => state.productReducer);
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const data = searchTerm?products.filter(p=>p.name.toLowerCase().includes(searchTerm.toLowerCase())):products;

 

    return (
        <Row className="my-4 g-4">
            {data.map(prd => (
                <Col md={4} key={prd.id}>
                    <Card>
                        <Card.Img variant="top" style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            src={prd.thumbnail} />
                        <Card.Body>
                            <div className='d-flex justify-content-between mb-3'>
                                <Badge bg="secondary">{prd.category}</Badge>
                                <Badge bg="secondary">{prd.brand}</Badge>
                            </div>
                            <Card.Title>{prd.title}</Card.Title>
                            <Card.Text className='p-des'>{prd.description}</Card.Text>
                            <Card.Text>₹ {prd.price} <s>₹ {prd.discountPercentage}</s></Card.Text>

                            <CartButton productId={prd.id}/>
                            <Button variant="dark">
                                <Link onClick={e => dispatch(setValue(prd.id))}  to={`/products/${prd.id}`}>View</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Products;