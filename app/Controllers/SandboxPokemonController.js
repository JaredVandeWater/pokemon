import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";


//Private
function _draw() {
    let myPokemon = ProxyState.myPokemon;
    let template = ''
    myPokemon.forEach(p => template += `<li class= "action hover-action" onclick="app.pokeApiController.showPokemon('${p.name}')">${p.name.toUpperCase()}</li>`)
    document.getElementById("myPokemonHTML").innerHTML = template


}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("myPokemon", _draw);
        _draw()
    }

    addMyPokemon() {
        sandboxPokemonService.addMyPokemon()
    }

}
