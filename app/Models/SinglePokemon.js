export default class SinglePokemon {
    constructor({ name, weight, height, img, sprites, types }) {
        this.name = name
        this.weight = weight
        this.height = height
        this.img = img || sprites.front_default
        this.types = types

    }

    get Template() {

        return /*html*/`
        <h2 class="text-center">Current Pokemon</h2>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <h3>${this.name.toUpperCase()}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col"><img src="${this.img}" alt=""></div>
            <div class="col my-auto">
                <h4>Height - ${this.height}</h4>
                <h4>Weight - ${this.weight}</h4>
                <h4>Type - ${this.sortType()}</h4>
            </div>
        </div>
        <div class="row">
        <button type="button" class="mx-auto mt-5 btn btn-primary">Catch</button>
        </div>
            
            
        `
    }

    sortType() {
        let template = ""
        this.types.forEach(t => {
            template += `${t.type.name.toUpperCase()} `


        });
        return template
    }

}