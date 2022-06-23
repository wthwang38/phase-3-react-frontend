import React from 'react'
import Form from './Form'

export default function Cards({price, name, year, image, condition, reviews, id, setChange, change}) {

    return (
    <div className='card'>
        <h3>{name}</h3>
        <img className="image" src={image}/>
        <p>Price: ${price}</p>
        <p>condition: {condition}</p>
        <p>Year: {year}</p>
        <button>Buy</button><button>Sell</button>
        {reviews.map(review => <p>{review.user.name}: {review.comment}</p>)}
        <Form sneaker_id={id} setChange={setChange} change={change}/>

    </div>
  )
}
