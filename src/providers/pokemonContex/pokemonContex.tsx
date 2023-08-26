import { useState,ReactNode, createContext, useContext, Children, useEffect } from "react";
import api from "../../services/api";

export const PokemonContext = createContext({} as PokemonProviderData)

interface PokemonProps {
    children?: ReactNode;
  }

interface PokemonProviderData{
    getPokemons: () => void;
    pokemonList: IPokemonList|null;  
    
}

interface IPokemonList {
    data?: IPokemon[];
}

interface IPokemon {
    id?: string;
    category?: string;
    img_url?: string;
    bc_img_url?: string;
    created_at?: string;
}

function PokemonProvider(props: PokemonProps){
    const [pokemonList, setPokemonList] = useState<IPokemonList | null>(null);
       
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