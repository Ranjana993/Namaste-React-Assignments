import React from 'react'
import FoodItem from './CartFoodItem'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)

    console.log(cartItems)
    return (
        <div>
            <h1>Cart Items : {cartItems.length} </h1>
            <div className="cartItems-list">
                {
                    cartItems.map(item => <FoodItem  {...item} />)
                }
            </div>

            
        </div>
    )
}

export default Cart