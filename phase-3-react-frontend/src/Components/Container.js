import React from 'react'
import Cards from './Cards'


function Container( {sneakers}) {
  return (
    <div className="container">
           {sneakers.length === undefined ? <div>Still loading...</div> : sneakers.map((sneaker) => <Cards key={sneaker.id} name={sneaker.name} price={sneaker.price} year={sneaker.year} image={sneaker.image} condition={sneaker.condition} reviews={sneaker.reviews}/>)}

    </div>

  )
}

export default Container