import React from 'react'
import "./Cart.css"
import { useSelector } from 'react-redux'


const Cart = () => {
    const cartItem = useSelector(store => store.cart.items);

    console.log("cartItems in cart page " , cartItem)

    return (
        <div>
        {
                cartItem.length === 0 ? <div className="cart_container">
                    <img src="https://media.istockphoto.com/id/669533572/vector/3d-small-people-shopping-cart.jpg?s=170667a&w=0&k=20&c=6Iv_KkyJXf1-xgYo-Qy3AvYjPZ9YiE2TA5MryqfwKL4=" alt="cart" />
                    <h1>Your cart is Empty...</h1>
                </div>
                :
                <div>
                        <h1>   length  {cartItem.length}</h1>
                </div>
        }
            
        </div>
    )
}

export default Cart