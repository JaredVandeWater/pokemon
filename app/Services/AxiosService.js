// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/jared/pokemon',
    timeout: 3000
})


// @ts-ignore
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 3000
})