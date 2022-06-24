import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Container from './Components/Container';
import React, { useState, useEffect } from 'react';
import AddForm from './Components/AddForm';
import EditForm from './Components/EditForm';

function App() {
  const [sneakerId, setSneakerId] = useState(null);
  const [sneakers, setSneakers] = useState([]);
  const [change, setChange] = useState(false)
  useEffect(() => {
    fetch("http://localhost:9292/sneakers")
      .then((r) => r.json())
      .then((sneakers) => setSneakers(sneakers));
  }, [change]);
  const completeEditing = () => {
    setSneakerId(null);
  };
  const enterEditModeFor = (sneakerId) => {
    setSneakerId(sneakerId);
  };
  return (
    <div>
      <Home />
      <NavBar/>
      <Container sneakers={sneakers} 
      change={change} setChange={setChange}
      enterEditModeFor={enterEditModeFor}/>
      <AddForm sneakers={sneakers} 
      change={change} setChange={setChange}
      />
      <EditForm sneakerId={sneakerId} setChange={setChange} change={change} completeEditing={completeEditing}/>

    </div>
  );
}

export default App;
