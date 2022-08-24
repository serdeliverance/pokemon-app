import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
  pokemon: any
}

const PokemonPage: FC<Props> = () => {

  const router = useRouter()

  console.log(router.query);
  

  return (
    <div>PokemonPage</div>
  )
}

export default PokemonPage