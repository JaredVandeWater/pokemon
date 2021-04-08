import { ProxyState } from "../AppState.js";
import SinglePokemon from "../Models/SinglePokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonApiService {
    async showPokemon(name) {

        let response = await pokemonApi.get(name)
        ProxyState.currentPokemon = new SinglePokemon(response.data)
    }

    async addAllPokemon() {
        let response = await pokemonApi.get('?offset=0&limit=151')
        ProxyState.apiPokemon = response.data.results

    }




}

export const pokemonApiService = new PokemonApiService();

