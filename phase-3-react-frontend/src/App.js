import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Container from './Components/Container';
import React, { useState, useEffect } from 'react';
import AddForm from './Components/AddForm';

function App() {

  const [sneakers, setSneakers] = useState([]);
  const [change, setChange] = useState(false)
  useEffect(() => {
    fetch("http://localhost:9292/sneakers")
      .then((r) => r.json())
      .then((sneakers) => setSneakers(sneakers));
  }, [change]);

  return (
    <div>
      <Home />
      <NavBar/>
      <Container sneakers={sneakers} 
      change={change} setChange={setChange}
      />
      <AddForm sneakers={sneakers} 
      change={change} setChange={setChange}
      />

    </div>
  );
}

export default App;
