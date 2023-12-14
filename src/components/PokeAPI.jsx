/* eslint-disable react/prop-types */
import {useEffect} from 'react';

const PokemonFetcher = ({ setPokemonImages }) => {
    useEffect(() => {
      const fetchPokemonImages = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
          const data = await response.json();
  
            const promises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();
          return {
            id: pokemonData.id,
            image: pokemonData.sprites.front_default
          };
        });

        const imagesData = await Promise.all(promises);
        setPokemonImages(imagesData);
      } catch (error) {
        console.error('Error fetching Pokémon images:', error);
      }
    };
      fetchPokemonImages();
    }, [setPokemonImages]);
  };
  
  export default PokemonFetcher;