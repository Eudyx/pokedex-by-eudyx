import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTypeColor } from "../hooks/useTypeColor";
import { useImage } from "../hooks/useImage";

const Card = ({ pokemons }) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState();
  const [color, getColor] = useTypeColor();
  const [img, setImage] = useImage();

  const dispatch = useDispatch();

  const getThisPokemon = () => {
    axios.get(`${url + pokemons.name}`).then((res) => {
      setPokemon(res.data);
      setImage(res.data)
      getColor(res.data.types[0].type.name);
    });
  };
  
  useEffect(() => {
    getThisPokemon(url);
  }, []);

  return (
    <div className="card" >
      <Link to={`${pokemon != undefined ? pokemon.name : null}`} className="link">
        <div className="upper-part" style={color}>
          {pokemon != undefined ? (
            <img src={img} alt={pokemon.name} />
          ) : null}
          {pokemon != undefined ? console.log() : null}
        </div>
        {/*Middle part design*/}
        <div className="middle-part">
          <div className="middle-ball">
            <div className="white-ball"></div>
          </div>
        </div>
        {/*Middle part design*/}
        <div className="lower-part" >
          <p className="name">{pokemon != undefined ? pokemon.name : null}</p>
          <div className="stats-container">
            <div className="stat">
              <div>
                <label>HP</label>
                {pokemon != undefined ? (
                  <span>{pokemon.stats[0].base_stat}</span>
                ) : null}
              </div>
              <div>
                <label>ATT</label>
                {pokemon != undefined ? (
                  <span>{pokemon.stats[1].base_stat}</span>
                ) : null}
              </div>
              <div>
                <label>DEF</label>
                {pokemon != undefined ? (
                  <span>{pokemon.stats[2].base_stat}</span>
                ) : null}
              </div>
              <div>
                <label>SPD</label>
                {pokemon != undefined ? (
                  <span>{pokemon.stats[5].base_stat}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
