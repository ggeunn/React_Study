import { useState, useEffect } from 'react';
import { getPokemonList } from '../api/PokemonAPI';
import PokemonItem from './PokemonItem';
import {searchPokemon} from '../api/PokemonAPI';
import { useDispatch, useSelector } from "react-redux";
import { callGetPokemonsAPI } from "../api/PokemonAPI";

function Main() {
    
    // const [pokemons, setPokemons] = useState([]); 
    const result = useSelector(state => state.pokemonReducer);


    const pokemons = result.results;

    const dispatch = useDispatch();

    useEffect(() => {

        // console.log('useEffect');

        // async function fetchPokemon() {
            
        //     const pokemonList = await getPokemonList();
        //     setPokemons(pokemonList);
        // }

        // fetchPokemon();

        dispatch(callGetPokemonsAPI());


    }, []);


    console.log('pokemons = ', pokemons);

    return (
        <>
                <div>
                <button onClick={ () => dispatch(callGetPokemonsAPI(result.previous))} >이전</button>
                <button onClick={ () => dispatch(callGetPokemonsAPI(result.next)) } >다음</button>
                { pokemons.map(pokemon => <PokemonItem key={ pokemon.url } pokemon={ pokemon }/> ) }
                </div>
        </>
    );
}

export default Main;
