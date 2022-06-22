import React from 'react'
import Cards from './Cards'


function Container( {sneakers}) {
  return (
    <div>
           {sneakers.length === undefined ? <div>Still loading...</div> : sneakers.map((sneaker) => <Cards key={sneaker.id} name={sneaker.name} price={sneaker.price} year={sneaker.year} image={sneaker.image} condition={sneaker.condition}/>)}

    </div>

  )
}

export default Container