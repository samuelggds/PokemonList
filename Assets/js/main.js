const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 10;
let offset = 0;



function loadPokemonItems (offset , limit){
   pokeApi.getPokemons(offset , limit).then((pokemons = []) => {
      const newHtml = pokemons.map((pokemon) => `
      <li class="pokemon ${pokemon.types.join(' poison')}">
      <span class="number">${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
      <ol class="types">
      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
      </ol>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
      </li>
      `).join('')
      pokemonList.innerHTML += newHtml
   })
}
loadPokemonItems(offset , limit)


loadMoreButton.addEventListener('click' , () => {
  offset += limit
   loadPokemonItems(offset , limit)

})







// const listItems = []
// for (let i = 0; i < pokemons.length; i++) {
  //  const pokemon = pokemons[i]
   // listItems.push(convertPokemonToHtml(pokemon))
//  }
 // console.log(listItems)
//})
//.catch((error) => console.log(error))
