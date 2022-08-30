import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { Favorites, NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorites.getFavorites())
  }, [])

  return (
    <Layout title="Favorites Pokemons">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites pokemons={favorites} />
      )}
    </Layout>
  )
}

export default FavoritesPage
