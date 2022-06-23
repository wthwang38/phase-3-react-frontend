import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Container from './Components/Container';
import Form from './Components/Form';
import React, { useState, useEffect } from 'react';

function App() {

  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/sneakers")
      .then((r) => r.json())
      .then((sneakers) => setSneakers(sneakers));
  }, []);
  return (
    <div>
      <Home />
      <NavBar/>
      
      <Container sneakers={sneakers}/>
      <Form/>

    </div>
  );
}

export default App;
