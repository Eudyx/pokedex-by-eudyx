import { useState } from "react";
import { pokes, getFilteredPokemons, getCurrentPage } from "../features/pokemonsSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const pokemons = useSelector(pokes);

  const pokemonFilter = (e) => {
    e.preventDefault();
    dispatch(getFilteredPokemons(pokemons.filter(x => x.name.includes(inputText.trim().toLowerCase()))));
    dispatch(getCurrentPage(1));
  }

  const onChangeText = (e) => {
    setInputText(e.target.value);
  }

  return (

    <nav className='navBar'>
        <div className='logo'>
        <a href="/">
          <img src='./logoPokedex.svg' alt="pokedex" />
        </a>
        </div>
        <form onSubmit={pokemonFilter}>
          <div className='search'>
            <input type="text" name="search-field" onChange={onChangeText} />
            <button type='submit' name="search">
              <img src='./searchIcon.svg' className='serachIcon' />
            </button>
          </div>
        </form>
    </nav>
  )
}

export default Navbar
