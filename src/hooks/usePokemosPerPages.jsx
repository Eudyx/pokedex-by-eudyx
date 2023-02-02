import { useState } from "react";

export const usePokemosPerPages = () => {
    const [pageOfPokemons, setPageOfPokemons] = useState([]);

    //slice the request of pokemons in N numbers of pages with N numbers of pokemons
  const getPokemonsPerPages = (pokemons, pokePage, numberOfPages) => {
    let res = [];
    let counter = 0;

    if(pokemons?.length){
      for (let i = 0; i < numberOfPages; i++) {
        res.push(pokemons.slice(counter, counter += pokePage));
      }
    }

    setPageOfPokemons(res);
  };

    return [pageOfPokemons, getPokemonsPerPages];
}