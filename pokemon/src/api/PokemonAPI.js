import { GET_POKEMONS } from "../modules/PokemonModule";

export function callGetPokemonsAPI(url) {

    const requestURL = url || 'https://pokeapi.co/api/v2/pokemon'; 

    async function getPokemons(dispatch, getState) {
    
        const result = await fetch(requestURL).then(res => res.json());
    
        console.log('result : ', result);
    
        dispatch({ type: GET_POKEMONS, payload: result });
    }

    return getPokemons;
}

// export async function getPokemonList() {

//     console.log('getPokemonList');
 
//    let  pokemons = [];

//       await  fetch('https://pokeapi.co/api/v2/pokemon-form')
//                                 .then(res => res.json())
//                                 .then(data => {
//                                     pokemons = data.results;
//                                     console.log('fetch');                           
//                                 })
//                                 .catch(err => console.log(err));

     
//     return pokemons;
// }

// export  function searchPokemon(searchName){

//     console.log('searchName ',searchName);
    
//     const pokemonList = []
//      fetch(`https://pokeapi.co/api/v2/pokemon-form/${searchName}`).then(res => res.json()).then(data);

  
//     console.log('pokemonList',pokemonList);

    
//     return pokemonList.filter(pokemon => pokemon.name.match(searchName));
// }

