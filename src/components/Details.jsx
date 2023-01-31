import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/details.css';
import { useImage } from '../hooks/useImage';
import { useTypeColor } from '../hooks/useTypeColor';

const Details = () => {
  const [color, getColor] = useTypeColor();
  const [img, setImage] = useImage();
  const [pokemon, setPokemon] = useState();
  const { name } = useParams();

  const getThisPokemon = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => setPokemon(res.data))
  }

  useEffect(() => {
    getThisPokemon(name);
  }, [])

  useEffect(() => {
    if(pokemon != undefined){
      getColor(pokemon.types[0].type.name);
      setImage(pokemon);
    }
  }, [pokemon]);

  return (
    <>
      {pokemon != undefined ? 
      <div className='details'>
      <h1 className='name-details' >{pokemon.name}</h1>
      <div className='upper' style={color} ></div>
      <div className='img-container'>
        <div className='main-ball'>
          <div></div>
          <img src={img} />
        </div>
        <div className='black-bar' ></div>
      </div>
      <div className='deascription-container'>
        <div className='description'>
          <h2>Height</h2>
          <span>{pokemon.height}</span>
        </div>
        <div className='description'>
          <h2>Weight</h2>
          <span>{pokemon.weight}</span>
        </div>
      </div>
      <div className='side-bar'>
        <div className='sides-details'>
          <h1 style={color} >Types</h1>
          <div className='side-detail'>
            {pokemon.types.map((x, index) => 
            <div
            key={index}
            className={index == pokemon.types.length - 1 ?
            'spd' : null}>
              <span>{x.type.name}</span>
            </div>)}
          </div>
        </div>
        <div className='sides-details'>
          <h1 style={color} >Abilities</h1>
          <div className='side-detail'>
            {pokemon.abilities.map((x, index) => 
            <div
            key={index}
            className={index == pokemon.abilities.length - 1 ?
            'spd' : null}>
              <span>{x.ability.name}</span>
            </div>)}
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='stats-details'>
          <h1 className='stats-details-title' style={color}>Stats</h1>
          <br/>
          <div className='stat-bar'>
            <h2>HP</h2>
            <div className='graphic-container'>
              <div style={{
                  width: `${(pokemon.stats[0].base_stat * 100) / 150}%`
                }} className='graphic-bar' ></div>
            </div>
          </div>
          <div className='stat-bar'>
            <h2>ATT</h2>
            <div className='graphic-container'>
              <div style={{
                  width: `${(pokemon.stats[1].base_stat * 100) / 150}%`
                }} className='graphic-bar' ></div>
            </div>
          </div>
          <div className='stat-bar'>
            <h2>DEF</h2>
            <div className='graphic-container'>
              <div style={{
                  width: `${(pokemon.stats[2].base_stat * 100) / 150}%`
                }} className='graphic-bar' ></div>
            </div>
          </div>
          <div className='stat-bar'>
            <h2>SPD</h2>
            <div className='graphic-container'>
              <div style={{
                  width: `${(pokemon.stats[5].base_stat * 100) / 150}%`
                }} className='graphic-bar' ></div>
            </div>
          </div>
        </div>

        <div className='moves'>
          <div style={{width: "100%", marginBottom: "2rem"}}>
            <h1 className='stats-details-title' style={color}>Stats</h1>
          </div>
          <div>
            <div className='moves-columns'>
              {pokemon.moves.map((x, index) => <div className='move' key={index}>{x.move.name}</div>)}
            </div>
          </div>
        </div>
      </div >
      <Link to='/' className='back' >
        go back
      </Link>
    </div> : null  
    }
    </>
  )
}

export default Details
