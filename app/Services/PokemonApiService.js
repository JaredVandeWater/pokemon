import { ProxyState } from "../AppState.js";
import SinglePokemon from "../Models/SinglePokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonApiService {

    async addAllPokemon() {
        let response = await pokemonApi.get('')
        ProxyState.apiPokemon = response.data.results

    }




}

export const pokemonApiService = new PokemonApiService();

