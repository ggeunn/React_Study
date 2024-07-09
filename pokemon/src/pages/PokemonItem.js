

function PokemonItem({pokemon}){

    return(

            <div className='ItemBox'>
                <h3> 포켓몬 이름 : {pokemon.name}</h3>
                <h4>{pokemon.url}</h4>
            </div>
   
    );

}
export default PokemonItem;