import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";


//Private
function _draw() {
    let myPokemon = ProxyState.myPokemon;
    let template = ''
    myPokemon.forEach(p => template += `<li class= "action hover-action" onclick="app.sandboxPokemonController.showPokemon('${p.id}')">${p.name.toUpperCase()}</li>`)
    document.getElementById("myPokemonHTML").innerHTML = template


}

//Public
export default class SandboxPokemonController {
    constructor() {
        ProxyState.on("myPokemon", _draw);
        this.getMyPokemon()
    }

    async addMyPokemon() {
        try {
            await sandboxPokemonService.addMyPokemon()

        } catch (error) {
            console.log(error);

        }
    }

    async getMyPokemon() {
        try {
            await sandboxPokemonService.getMyPokemon()
        } catch (error) {

        }
    }

    async showPokemon(id) {

        try {
            await sandboxPokemonService.showPokemon(id)
        } catch (error) {
            console.log(error);

        }
    }

    async removeMyPokemon(id) {
        try {
            await sandboxPokemonService.removeMyPokemon(id)
        } catch (error) {
            console.log(error);
        }
    }
}
