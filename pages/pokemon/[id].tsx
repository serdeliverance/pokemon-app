import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { pokeApi } from '../../api'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const router = useRouter()
  
  return (
    <h1># {pokemon.id} - {pokemon.name}</h1>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${ index + 1}` )

  return {
    paths: 
      pokemons151.map(id => ({
        params: {
          id
        }
      })),
    fallback: false // if I look for a not pre generated page, it will show 404
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
        pokemon: data
    }
  }
}

export default PokemonPage