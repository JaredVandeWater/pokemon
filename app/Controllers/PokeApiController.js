import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";



//Private
function _draw() {
    let apiPokemon = ProxyState.apiPokemon;
    let template = ''
    apiPokemon.forEach(v => template += v.Template)
    document.getElementById("allPokemonHTML").innerHTML =
        `
  <li>${apiPokemon}</li>
`

}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("values", _draw);
        _draw()
    }

    addAllPokemon() {
        pokemonApiService.addAllPokemon()
    }

}
