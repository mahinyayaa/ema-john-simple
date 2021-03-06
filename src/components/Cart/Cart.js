import React from 'react';
import '../Product/Product.css'


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity || 1;  
    }
    let shipping = 0;
    if(total > 200){
        shipping = 0
    }
    else if(total > 100){
        shipping = 6.99
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2)
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: ${total.toFixed(2)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax + Vat: ${tax}</p>
            <p>Total Price: ${grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;