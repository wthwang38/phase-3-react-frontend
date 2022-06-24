import React, {useState} from 'react'

function Form({sneaker_id, setChange, change}) {

 const [comment, setComment] = useState('');
 const [name, setName] = useState('')



  function handleSubmit(e) {
   e.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        name: name,
        sneaker_id: sneaker_id
      }),
    })
    .then(r => r.json())
    .then(() =>{
        setChange(!change)
        setComment("");
        setName("")
    }
    )
  }
  

  return (
  <div>
    <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
                <textarea name="Comment" placeholder="Write your comment here..." rows={5} value={comment} onChange={(e)=> setComment(e.target.value)} />
                <input id="submit" className="button" type="submit" value="Write Review" />
    </form>
  </div>
  )
}


export default Form