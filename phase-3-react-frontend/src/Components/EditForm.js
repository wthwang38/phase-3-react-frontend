import React, { useState, useEffect } from "react";

const EditForm = ({ sneakerId, completeEditing, change, setChange}) => {
  const [editData, setEditData] = useState({
    name: "",
    price: 0,
    year: "",
    condition: "",
    image: "",
  });

  const { name, price, year, condition, image } = editData;

  useEffect(() => {
    fetch(`http://localhost:9292/sneakers/${sneakerId}`)
      .then((res) => res.json())
      .then((sneaker) => setEditData(sneaker));
  }, [sneakerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (sneakerId === null){
        alert("Please pick a sneaker to edit!")
    }
    else{
    fetch(`http://localhost:9292/sneakers/${sneakerId}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      }, 
      body: JSON.stringify(editData)
    })
    .then(r => r.json())
    .then(() => {
    })
    setChange(!change)
    completeEditing();}
  }

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Sneaker</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="price">Price</label>
      <textarea id="price" name="price" value={price} onChange={handleChange} />

      <label htmlFor="year">Year</label>
      <input name="year" id="year" value={year} onChange={handleChange}/>

      <label htmlFor="condition">Condition</label>
      <input
        type="text"
        id="condition"
        name="condition" 
        value={condition}
        onChange={handleChange}
      />

      <label htmlFor="image">Screenshot</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleChange}
      />

      <button type="submit">Update Sneaker Information</button>
    </form>
  );
};

export default EditForm;