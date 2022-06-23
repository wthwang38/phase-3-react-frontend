import React from 'react'
import Cards from './Cards'


function Container( {sneakers, setChange, change}) {
  return (
    <div className="container">
           {sneakers.length === undefined ? <div>Still loading...</div> : sneakers.map((sneaker) => <Cards key={sneaker.id} sneaker={sneaker} setChange={setChange} change={change} />)}

    </div>

  )
}

export default Container