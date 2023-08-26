import { useContext, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IPokemon, PokemonContext} from "../providers/pokemonContex/pokemonContex";
import randomNumberFunction from "../utils/randomNumberFunction";

export default function PokemonCards(){
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);
    const [filteredPokemon, setFilteredPokemon] = useState<IPokemon |null>(null)
    const {pokemonList, getPokemons} = useContext(PokemonContext)  
    const inputRef = useRef<HTMLInputElement>(null)

    getPokemons();
    const handleClick = () => {
      setNum(randomNumberFunction());
      setShow(true)
      
    }

    const handleChange = () => {
      const search = inputRef.current?.value
      pokemonList?.filter((pokemon) => {
        if(search){
          if (pokemon.name?.includes(search.charAt(0).toUpperCase())){
            setFilteredPokemon(pokemon)
            setShow(true)
          }}
          
      })}      

    return(
      <section className="middleComponents">

        <ReactCardFlip isFlipped={show} flipDirection="vertical">
        <section>
            <img alt="Pokebola" src="https://pokemon-cards-viewer.netlify.app/images/backCover.png" style={{width:100}}/>
        </section>

        {show &&( filteredPokemon? 
          ((<section className="pokemonComponents">
           <section className="card">
              <div className="cardImg">
                <div className={`bacgroundImg + ${filteredPokemon.category}`}>
                  <img className="pokemonImg" alt={`${filteredPokemon.name} + gif`} src={`${filteredPokemon.image_url}`}/>
                </div>
              </div>
              <div className="info">
                <p>{filteredPokemon.name}</p>
                <p>{filteredPokemon.category}</p>
              </div>
            </section>
        </section>
        )):((<section className="pokemonComponents">
           <section className="card">
              <div className="cardImg">
                <div className={`bacgroundImg + ${pokemonList![num].category}`}>
                  <img className="pokemonImg" alt={`${pokemonList![num].name} + gif`} src={`${pokemonList![num].image_url}`}/>
                </div>
              </div>
              <div className="info">
                <p>{pokemonList![num].name}</p>
                <p>{pokemonList![num].category}</p>
              </div>
            </section>
        </section>)))
          }
        </ReactCardFlip>
        
        
          <button  onClick={() => {
            getPokemons();
            handleClick();
            }}>Gerar carta</button>
          <form>
            <input placeholder="Procure por nome ou tipo" ref={inputRef} type="text"></input>
            <button onClick={handleChange} type="button">buscar</button>
          </form>
      </section>
    )
    }