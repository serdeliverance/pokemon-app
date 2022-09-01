import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getPokemon, pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { Pokemon, PokemonResponse } from '../../interfaces'
import { localFavorites } from '../../utils'

import confetti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter()

  const [isInFavorites, setIsInFavorites] = useState(false)

  useEffect(() => {
    setIsInFavorites(localFavorites.existsInFavorites(pokemon.id))
  }, [])

  const onToggleFavorites = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    })
  }

  return (
    <Layout title="Some pokemon">
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.image}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button
                color="gradient"
                onClick={onToggleFavorites}
                ghost={isInFavorites}
              >
                {isInFavorites ? 'In Favorites' : 'Save in Favorites'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.frontDefault}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.backDefault}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.frontShiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.backShiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false, // if I look for a not pre generated page, it will show 404
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const pokemon = await getPokemon(id)

  return {
    props: {
      pokemon,
    },
  }
}

export default PokemonPage
