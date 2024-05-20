import React from 'react'
import Counter from './Counter'

function CartItem({product, quantity}) {
    return (
        <div className='cart-item__container'>
            <h2>
                {product.name}
            </h2>
            <Counter 
                _id={product._id}
                initialValue={quantity}/>
        </div>
    )
}

export default CartItem