import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartButton from "./CartButton";
import { useNavigate } from "react-router-dom";
// import Products from "./Products";
const Checkout=()=>{
    const cartData = useSelector(state => state.cartReducer);
    const {products} = useSelector(state => state.productReducer);
    // console.log(cartData);
    const prdIds = Object.keys(cartData);
    // const quantities = Object.values(cartData);

    const getProductInfo=(productId)=>{
        return products.find(p=>p._id===productId)
    }

    let navigate = useNavigate();
    const placeOrder=()=>{
        window.alert("Please login first");
        navigate('/login')
    }

    return (<Container>
            {prdIds.length ?
                <>
                    {prdIds.map(productId=>(
                        <Row className="justify-content-center mt-5" key={productId}>
                            <Col><h2>{getProductInfo(productId).title}</h2></Col>
                            <Col><CartButton productId={productId}/></Col>
                        </Row>
                    ))}
                    <div className="text-center mt-4">
                        <Button onClick={placeOrder}>CONFIRM CHECKOUT</Button>
                    </div>
                </>
            :<h2>No Data Found</h2>
        }
        </Container>)
}
export default Checkout;