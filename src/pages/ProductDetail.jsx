import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../redux/actions/detailAction';
import { useEffect } from "react";
const ProductDetail = () => {
    const dispatch = useDispatch(); //dispatcher to action


    const {products} = useSelector((state) => state.detailReducer);
    const {product} = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    console.log(product)
    return (
        <div>
            {products.id}<br/>
            {products.brand}<br/>
            {products.category}<br/>
            {products.description}<br/>
        </div>
    );
};

export default ProductDetail;