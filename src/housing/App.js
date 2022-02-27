import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";


// import * as data from './data.json';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  // console.log(data)

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://data.austintexas.gov/resource/x5p7-qyuv.json?$limit=1000");
        userData = await response.json();
        console.log(userData)
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.project_name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1>Available Housing Complexes</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
