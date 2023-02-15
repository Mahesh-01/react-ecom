import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from "react-icons/bs";

import { decrease, increase } from '../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const CartButton=({productId})=>{

    const cartData = useSelector(state => state.cartReducer)
    const productID = Object.keys(cartData).find(prdId=> prdId===productId);
    const quantity = cartData[productID] || 0;

    const dispatch = useDispatch(); //dispatcher to action
    return(
        <>  
            {quantity===0?
            
            <Button onClick={e => dispatch(increase(productId))} variant="primary">
                <BsCart3 /> Add
            </Button>
                :
            <InputGroup className="mb-3">
                <Button onClick={e => dispatch(decrease(productId))}>-</Button>
                <Form.Control className='text-center' value={quantity} readOnly/>
                <Button onClick={e => dispatch(increase(productId))}>+</Button>
            </InputGroup>
            
            }
        </>
    )
}
export default CartButton