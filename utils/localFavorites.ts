const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  )

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existsInFavorites = (id: number): boolean => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  )

  return favorites.includes(id)
}

// TODO fix this ling warning
export default {
  toggleFavorite,
  existsInFavorites,
}
