import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";



//Private
function _draw() {
    let apiPokemon = ProxyState.apiPokemon;
    let template = ''
    apiPokemon.forEach(p => template += `<li class= "action hover-action" onclick="app.pokeApiController.showPokemon('${p.name}')">${p.name.toUpperCase()}</li>`)
    document.getElementById("allPokemonHTML").innerHTML = template

}

function _drawCurrent() {
    document.getElementById("currentPokemonHTML").innerHTML = ProxyState.currentPokemon ? ProxyState.currentPokemon.Template : ''
}

//Public
export default class PokemonApiController {
    constructor() {
        ProxyState.on("apiPokemon", _draw);
        ProxyState.on("currentPokemon", _drawCurrent);


        this.addAllPokemon()

    }

    async addAllPokemon() {
        try {
            await pokemonApiService.addAllPokemon()

        } catch (error) {
            console.log(error);

        }
    }

    async showPokemon(name) {
        try {
            await pokemonApiService.showPokemon(name)

        } catch (error) {
            console.log(error);

        }

    }

}
