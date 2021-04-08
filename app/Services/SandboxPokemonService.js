import { ProxyState } from "../AppState.js";
import SinglePokemon from "../Models/SinglePokemon.js";
import { sandboxApi } from "./AxiosService.js"
import { pokemonApiService } from "./PokemonApiService.js";

class SandboxPokemonService {
    async getMyPokemon() {
        try {
            let response = await sandboxApi.get('')
            ProxyState.myPokemon = response.data.map(p => new SinglePokemon(p, true))

        } catch (error) {
            console.log(error);

        }
    }




    async addMyPokemon() {
        try {
            let response = await sandboxApi.post('', ProxyState.currentPokemon)

            ProxyState.myPokemon = [...ProxyState.myPokemon, new SinglePokemon(response.data, true)]

        } catch (error) {
            console.log(error);

        }

    }

    async showPokemon(id) {
        try {
            ProxyState.currentPokemon = ProxyState.myPokemon.find(p => p.id === id)
            ProxyState.currentPokemon = ProxyState.currentPokemon

        } catch (error) {
            console.log(error);
        }

    }

    async removeMyPokemon(id) {
        try {
            await sandboxApi.delete(id)
            ProxyState.currentPokemon = null
            ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != id)

        } catch (error) {
            console.log(error);
        }
    }



}

export const sandboxPokemonService = new SandboxPokemonService();

