import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hoooks/useCart';
import useProducts from '../../hoooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history=useHistory();

    const handleRemove=key=>{
        const newCart=cart.filter(product=>product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder= () =>{
        history.push('/shipping');
        /* setCart([]);
        clearTheCart(); */
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product=> <ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={()=> handlePlaceOrder()} className="btn-regular">Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;