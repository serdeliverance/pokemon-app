import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <h1>Home Page</h1>
        <Button color='gradient'>Click me!</Button>
      </Layout>
    </>
  )
}

export default Home
