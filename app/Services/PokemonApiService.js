import { ProxyState } from "../AppState.js";
import SinglePokemon from "../Models/SinglePokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonApiService {
    async showPokemon(name) {
        let response = await pokemonApi.get(name)
        ProxyState.currentPokemon = new SinglePokemon(response.data)
        console.log(response.data);
    }

    async addAllPokemon() {
        let response = await pokemonApi.get('')
        ProxyState.apiPokemon = response.data.results

    }




}

export const pokemonApiService = new PokemonApiService();

