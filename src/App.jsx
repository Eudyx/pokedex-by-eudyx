import ShowPokemons from "./components/ShowPokemons";
import Details from "./components/Details";
import ErrorPage from "./components/ErrorPage";
import { HashRouter, Route, Routes } from "react-router-dom";

import './css/card.css';
import './css/pokemons.css';
import './css/navbar.css';

function App() {
  return (
    <HashRouter >
      <div style={{margin: 'auto'}}>
        <Routes>
          <Route path="/" element={<ShowPokemons />} />
          <Route path={'/:name'} element={<Details />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
