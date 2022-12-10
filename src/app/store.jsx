import { configureStore } from "@reduxjs/toolkit";
import pokemons from '../features/pokemonsSlice'

export default configureStore({
    reducer: {
        pokemons: pokemons
    }
})