import React from 'react'
import Form from './Form'
import { FaPencilAlt } from "react-icons/fa"

export default function Cards({sneaker, setChange, change, enterEditModeFor}) {
    const { price, name, year, image, condition, reviews, id } = sneaker
function handleDeleteClick() {
    fetch(`http://localhost:9292/sneakers/${id}`, 
    {method: "DELETE",}).then(() => {setChange(!change)})
  }
  const handleEditClick = () => {
    enterEditModeFor(id);
  };
    return (
    <div className='card'>
        <h3>{name}</h3>
        <img className="image" src={image}/>
        <p>Price: ${price}</p>
        <p>condition: {condition}</p>
        <p>Year: {year}</p>
        <button onClick={handleDeleteClick}>Buy</button>          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
        {reviews.map(review => <p>{review.user.name}: {review.comment}</p>)}
        <Form key={id} sneaker_id={id} setChange={setChange} change={change}/>

    </div>
  )
}
