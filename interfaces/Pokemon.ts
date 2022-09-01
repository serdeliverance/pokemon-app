export interface Pokemon {
  id: number
  name: string
  image: string
  sprites: Sprites
}

export interface Sprites {
  frontDefault: string
  backDefault: string
  frontShiny: string
  backShiny: string
}
