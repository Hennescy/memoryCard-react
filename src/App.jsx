import './App.css'
import PokemonFetcher from './components/PokeAPI'
import Display from './components/Main'
import { useState } from 'react'

const App = () => {
  const [pokemonImages, setPokemonImages] = useState([]);

  return (
    <div>
      <PokemonFetcher setPokemonImages={setPokemonImages} />
      <Display images={pokemonImages} />

    </div>
  );

};

export default App;
