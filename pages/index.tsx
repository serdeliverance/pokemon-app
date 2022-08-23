import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api'

const Home: NextPage = (props) => {

  console.log(props);
  

  return (
    <>
      <Layout title='Listado de Pokemons'>
        <h1>Home Page</h1>
        <Button color='gradient'>Click me!</Button>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151')



  return {
    props: {
      pokemons: data.results // TODO add types
    }
  }
}

export default Home
