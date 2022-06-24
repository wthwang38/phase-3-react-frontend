import React from 'react'
import Form from './Form'

export default function Cards({sneaker, setChange, change}) {
    const { price, name, year, image, condition, reviews, id } = sneaker
function handleDeleteClick() {
    fetch(`http://localhost:9292/sneakers/${id}`, 
    {method: "DELETE",}).then(() => {setChange(!change)})
  }
const handleChange = () => {

}
    return (
    <div className='card'>
        <h3>{name}</h3>
        <img className="image" src={image}/>
        <p>Price: ${price}</p>
        <p>condition: {condition}</p>
        <p>Year: {year}</p>
        <button onClick={handleDeleteClick}>Buy</button><button>Sell</button>
        {reviews.map(review => <p>{review.user.name}: {review.comment}</p>)}
        <Form key={id} sneaker_id={id} setChange={setChange} change={change}/>

    </div>
  )
}
