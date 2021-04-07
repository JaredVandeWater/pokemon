import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";


//Private
function _draw() {
    let myPokemon = ProxyState.myPokemon;
    let template = ''
    myPokemon.forEach(v => template += v.Template)
    document.getElementById("myPokemonHTML").innerHTML =
        `
  <li>${myPokemon}</li>
`

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
