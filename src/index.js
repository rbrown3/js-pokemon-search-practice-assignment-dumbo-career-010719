document.addEventListener('DOMContentLoaded', () => {


const containerForPokemons = document.getElementById('pokemon-container')
const pokemonSearch = document.getElementById('pokemon-search-input')
let allPokemonData = []




pokemonSearch.addEventListener('input', function(event){
  const userSearchTerm = event.target.value

  const filteredPokemon  = allPokemonData.filter(function(pokemon) {
     return pokemon.name.includes(userSearchTerm)
  })
  const pokeHTML = filteredPokemon.map(function(pokemon){

   return `
      <div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
    <div class="pokemon-image">
      <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
    </div>
  </div>
</div>`

}).join(' ')
containerForPokemons.innerHTML = pokeHTML

})

containerForPokemons.addEventListener('click', function (event){
  if (event.target.dataset.action === 'flip'){
    const clickedPokemon = allPokemonData.find( function(pokemon){

      return pokemon.id === parseInt(event.target.dataset.id)
    })
     if (event.target.src === clickedPokemon.sprites.front) {
       event.target.src = clickedPokemon.sprites.back
     }else {
       event.target.src = clickedPokemon.sprites.front
     }
  }
})

  fetch("http://localhost:3000/pokemon", {method:'GET'}).then(function(response){
  return response.json()
  })
    .then(function(json){
        allPokemonData = json
    allPokemonData.forEach(function(pokemon){

    containerForPokemons.innerHTML += `<div id="pokemon-container">
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
      </div>
    </div>
  </div>`
})
})
})



//  pokemonContainer.addEventListener("click" (event) =>
//       if event.target.
//     }
//   }
// })
//

// function displayOnPage(json){
//   const pokemonContainer = document.getElementById('pokemon-container')
//    json.forEach(function(json){
//
//      const pokemonCard = document.createElement('div')
//      pokemonCard.className = "pokemon-card"
//
//      const pokemonFrame = document.createElement('div')
//      pokemonFrame.className = "pokemon-frame"
//      const pokemonText = document.createElement('h1')
//        pokemonText.innerText = json.name
//        pokemonText.className = "center-text"
//        const pokemonImage = document.createElement('div')
//        pokemonImage.className = "pokemon-image"
//        const img = document.createElement('img')
//        img.setAttribute('data-id',`${json.id}`)
//         img.src = json.sprites.front
//         img.alt = json.sprites.back
//
//     //   pokemonImage.append(img)
//     // pokemonFrame.append(pokemonImage)
//        pokemonContainer.append(pokemonCard)
//        pokemonCard.append(pokemonFrame)
//        pokemonFrame.append(pokemonText,pokemonImage)
//        pokemonImage.append(img)
//
//
//
//    })
// }
