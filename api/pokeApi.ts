import axios from 'axios'
import { Pokemon, PokemonResponse } from '../interfaces'

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const getPokemon = async (id: string) => {
  const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`)

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.other?.dream_world.front_default || '/no-image.png',
    sprites: {
      frontDefault: data.sprites.front_default,
      backDefault: data.sprites.back_default,
      frontShiny: data.sprites.front_shiny,
      backShiny: data.sprites.back_shiny,
    },
  }

  return pokemon
}
