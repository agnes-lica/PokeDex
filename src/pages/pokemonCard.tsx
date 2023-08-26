import { useContext } from "react";
import { PokemonContext } from "../providers/pokemonContex/pokemonContex";

function PokemonCards(){
    const {pokemonList, getPokemons} = useContext(PokemonContext)
    
    
    return(<button
        onClick={() => {
            getPokemons()
          console.log(pokemonList)
        }}
      >
        Meus envios
      </button>)
}

export default PokemonCards;