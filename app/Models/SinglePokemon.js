export default class SinglePokemon {
    constructor({ name, weight, height, img, sprites, types }) {
        this.name = name
        this.weight = weight
        this.height = height
        this.img = img || sprites.other.dream_world.front_default
        this.types = types

    }

    get Template() {

        return /*html*/`
        `
    }
}