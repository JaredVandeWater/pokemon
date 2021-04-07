import { ProxyState } from "../AppState.js";
import SinglePokemon from "../Models/SinglePokemon.js";
import { sandboxApi } from "./AxiosService.js"

class SandboxPokemonService {
    async addMyPokemon() {
        try {
            let response = await sandboxApi.post('', ProxyState.currentPokemon)
            ProxyState.myPokemon = [...ProxyState.myPokemon, new SinglePokemon(response.data)]

        } catch (error) {
            console.log(error);

        }

    }




}

export const sandboxPokemonService = new SandboxPokemonService();

