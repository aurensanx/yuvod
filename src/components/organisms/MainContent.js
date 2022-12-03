import { useState } from 'react'

import { API_ROUTES, API_URL } from '../../constants/api'
import { PAGINATION } from '../../constants/pagination'
import { useFetch } from '../../hooks/useFetch'
import { Flex } from '../atoms/utils/Flex'
import { Pagination } from '../molecules/Pagination'
import { PokemonList } from '../molecules/PokemonList'

export const MainContent = () => {
  const [page, setPage] = useState(0)
  const { data } = useFetch(`${API_URL}${API_ROUTES.POKEMON}?limit=${PAGINATION.PAGE_SIZE}&offset=${page * PAGINATION.PAGE_SIZE}`)

  const pokemonList = data?.results || []

  return (
    <Flex direction='column' gap='1.5rem' justify='center'>
      <Flex justify='center'>
        <PokemonList pokemonList={pokemonList} />
      </Flex>
      <Pagination count={data?.count} page={page} setPage={setPage} />
    </Flex>
  )
}
