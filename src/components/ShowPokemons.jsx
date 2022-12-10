import Pokemons from "./Pokemons";
import Pagination from "./Pagination";
import Navbar from "./Navbar"

const ShowPokemons = () => {
  
  return (
    <div>
        <Navbar />
        <Pokemons />
        <Pagination />
    </div>
  )
}

export default ShowPokemons