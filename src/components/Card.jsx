import React from 'react'
import Counter from './Counter'
// import { Link } from 'react-router-dom'

function Card({
    _id,
    name,
    // img,
    imgUrl,
    category,
    brand,
    price,
    ageFrom,
    ageTo,
    shortDesc,
    delivery,
}) {
    return (

        <div className="card__container">
            {/* <Link to={`/detail/${_id}`} > */}
                <div className='card__data'>
                    <h2>{name}</h2>
                    {/* <img src={img} alt={shortDesc} /> */}
                    <img src={imgUrl} alt={shortDesc} />
                    <b>Edad: {ageFrom} a {ageTo}</b>
                    <p>{shortDesc}</p>
                </div>
                <div className="card__price">
                    $ {price}
                </div>
            {/* </Link> */}
            <Counter _id={_id}/>
        </div>
    )
}

export default Card










  

