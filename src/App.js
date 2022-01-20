import React, { useState } from "react";
import axios from "axios";

function App() {
  //set as empy arry
  const [pokemons, setPokemons] = useState([]);
  const fetchPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((pokemons) => pokemons.json())

      //will return the json results
      .then((jsonRes) => {
        setPokemons(jsonRes.results);
        // console.log(jsonRes.results);
      })

      .catch((someErr) => console.log(someErr));
  };
  //AXIOS requires to access trhu data
  const axiosPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => {
        console.log(res.data.results);
        setPokemons(res.data.results);
      })

      //axio wraps res into data.obj
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Pokemons</h1>
      <button onClick={fetchPoke}>Get Pokemons</button>
      {/* this is to check if is working */}
      {/* {JSON.stringify(pokemons)} */}

      <button onClick={axiosPokemons}>Axio Pokemons</button>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon, idx) => {
            return (
              <tr key={idx}>
                <td> {pokemon.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
