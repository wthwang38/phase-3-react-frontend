import React, {useState} from 'react'

function Form() {

  const initialForm = {
    name: "",
    comment: ""
  }
  const [form, setForm] = useState(initialForm);


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:9292/reviews", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then((r) => r.json())
  //     .then((newReview) => onAddReview());
  // }

  return (
  <div>
    {/* <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <textarea name="Comment" placeholder="Write your comment here..." rows={10} value={form.comment} onChange={handleChange} />
                <input id="submit" className="button" type="submit" value="Write Review" />
    </form>; */}
  </div>
  )
}


export default Form