import React from 'react'
import Cards from './Cards'


function Container( {sneakers, setChange, change}) {
  return (
    <div className="container">
           {sneakers.length === undefined ? <div>Still loading...</div> : sneakers.map((sneaker) => <Cards id={sneaker.id} name={sneaker.name} price={sneaker.price} year={sneaker.year} image={sneaker.image} condition={sneaker.condition} reviews={sneaker.reviews} setChange={setChange} change={change}/>)}

    </div>

  )
}

export default Container