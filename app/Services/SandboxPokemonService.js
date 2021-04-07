import { ProxyState } from "../AppState.js";
import SinglePokemon from "../Models/SinglePokemon.js";

class SandboxPokemonService {
    addMyPokemon() {
        throw new Error("Method not implemented.");
    }




}

export const sandboxPokemonService = new SandboxPokemonService();

