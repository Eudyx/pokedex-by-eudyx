import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        pokemonsList: {}, // All the pokemons
        filteredPokemons: {},
        pokePerPage: 12, // Quantity of pokemons per pages
        pokePages: 0, // Number of total pages
        currentPage: 1
    },
    reducers: {
        getPokemons: (state, action) => {state.pokemonsList = action.payload},
        getNumberOfpages: (state, action) => {
            state.pokePages = action.payload < 1 ? 1 : action.payload
        },
        getCurrentPage: (state, action) => {state.currentPage = action.payload},
        getFilteredPokemons: (state, action) => {state.filteredPokemons = action.payload}
    }
});

export const getAllPokemonsThunk = (url) => (dispatch) => {
    axios.get(url)
        .then(res => {
            dispatch(getPokemons(res.data.results));
        });
}

export default pokemonsSlice.reducer;

export const { getPokemons, getNumberOfpages, getCurrentPage, getCurrentPokemon, getFilteredPokemons } = pokemonsSlice.actions;

export const pokes = (state) => state.pokemons.pokemonsList

export const pages = (state) => state.pokemons.pokePages;

export const pPages = (state) => state.pokemons.pokePerPage;

export const cPage = (state) => state.pokemons.currentPage;

export const filteredPokes = (state) => state.pokemons.filteredPokemons;