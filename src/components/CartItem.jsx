import React from 'react'
import Counter from './Counter'

function CartItem({_id, movieData, quantity}) {
    return (
        <div className='cart-item__container'>
            <h2>
                {movieData.name}
            </h2>
            <Counter 
                _id={_id} 
                movieData={movieData}
                initialValue={quantity}/>
        </div>
    )
}

export default CartItem