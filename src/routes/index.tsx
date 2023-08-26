import { Routes, Route } from "react-router-dom";
import PokemonCards from "../pages/pokemonCard";

const RoutesApplication = () =>{
    return (
        <Routes>
            <Route path="/" element={<PokemonCards/>} />
        </Routes>
    )
}

export default RoutesApplication;