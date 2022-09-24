import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/PokeAPI.css";

const PokeAPI = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <div>
      <h1>Poke API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Ingresa el nombre de un Pokemon"
          />
        </label>
      </form>
      <div className="pokeAPICARD">
        {pokemonData.map((data) => {
          return (
            <div className="containerPoke">
              <img
                className="pokeImagen"
                src={data.sprites["front_default"]}
                alt=""
              />
              <div className="divTable">
                <div className="divTableBody">
                  <div className="divTableRow">
                    <div className="divTableCell">Tipo</div>
                    <div className="divTableCell">{pokemonType}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Altura</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.height * 10)} cm
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Peso</div>
                    <div className="divTableCell">
                      {" "}
                      {Math.round(data.weight * 0.1)} Kg
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Numero de Batallas</div>
                    <div className="divTableCell">
                      {data.game_indices.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokeAPI;
