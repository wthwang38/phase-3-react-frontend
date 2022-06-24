import { useState } from "react";

const AddForm = ({ setChange, change }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    year: "",
    condition: "",
    image: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData}),
    };

    fetch("http://localhost:9292/sneakers", configObj)
      .then((r) => r.json())
      .then(() => {
        setChange(!change);
        setFormData({
          name: "",
          price: 0,
          year: 2022,
          image: "",
          condition: "",
        });
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Sneaker</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="price">Price</label>
        <textarea
          id="price"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />

        <label htmlFor="year">Year</label>
        <input
          name="year"
          id="year"
          onChange={handleChange}
          value={formData.year}
        />

        <label htmlFor="condition">Condition</label>
        <input
          type="text"
          id="condition"
          name="condition"
          onChange={handleChange}
          value={formData.condition}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">Add NewSneaker</button>
      </form>
    </section>
  )}

export default AddForm