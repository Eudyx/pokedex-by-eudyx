import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getAllPokemonsThunk,
  getNumberOfpages,
  pages,
  pPages,
  cPage,
  pokes,
  filteredPokes
} from "../features/pokemonsSlice";
import { usePokemosPerPages } from "../hooks/usePokemosPerPages";

const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const [pageOfPokemons, getPokemonsPerPages] = usePokemosPerPages([]);
  const [request, setRequest] = useState([]);

  //Redux
  const dispatch = useDispatch();
  const pokemons = useSelector(pokes);
  const pokePage = useSelector(pPages);
  const numberOfPages = useSelector(pages);
  const currentPage = useSelector(cPage) - 1;
  const filPokes = useSelector(filteredPokes);

  useEffect(() => {
    dispatch(getAllPokemonsThunk(url, pokePage));
  }, []);

  useEffect(() => {
    setRequest(!filPokes?.length ? pokemons : filPokes);
    dispatch(getNumberOfpages(Math.round(request.length / pokePage)));
    getPokemonsPerPages(request, pokePage, numberOfPages);
  }, [request, filPokes, pokemons, numberOfPages]);

  return (
    <div className="pokemons-container">
      {pageOfPokemons?.length
          ? pageOfPokemons[currentPage].map((x) => <Card key={x.name} pokemons={x} />)
          : null}
      {/* {pokemons.results?.length ? console.log(pokemons.results) : null} */}
    </div>
  );
};

export default Pokemons;
