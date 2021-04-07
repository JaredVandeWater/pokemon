import PokeApiController from "./Controllers/PokeApiController.js";
import SandboxPokemonController from "./Controllers/SandboxPokemonController.js";

class App {
  pokeApiController = new PokeApiController();
  sandboxPokemonController = new SandboxPokemonController();
}

window["app"] = new App();
