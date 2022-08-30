import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage: NextPage = () => {

  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorites.getFavorites())
  }, [])
  

  return (
    <Layout title="Favorites Pokemons">
      <NoFavorites />
    </Layout>
  )
}

export default FavoritesPage
