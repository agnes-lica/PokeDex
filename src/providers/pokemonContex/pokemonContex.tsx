import { useState,ReactNode, createContext, useContext, Children, useEffect } from "react";
import api from "../../services/api";

export const PokemonContext = createContext({} as PokemonProviderData)

interface PokemonProps {
    children?: ReactNode;
  }

interface PokemonProviderData{
    getPokemons: () => void;
    pokemonList: IPokemon[] | null;
}

export interface IPokemon {
    id?: string;
    name?: string;
    category?: string;
    image_url?: string;
    background_image_url?: string;
    created_at?: string;
}

function PokemonProvider(props: PokemonProps){
    const [pokemonList, setPokemonList] = useState<IPokemon[] | null>(null);
    const [filteredPokemon, setFilteredPokemon] = useState<IPokemon |null>(null)

     const getPokemons = async () => {
        await api.catch().then((res) => {
          setPokemonList(res.data)
          })
        }
 

    return(
        <PokemonContext.Provider value={{pokemonList, getPokemons}}>{props.children}</PokemonContext.Provider>
    )
}


export default PokemonProvider;