import { useEffect, useState } from 'react'

import { API_ROUTES, API_URL } from '../../constants/api'
import { PAGINATION } from '../../constants/pagination'
import { useFetch } from '../../hooks/useFetch'
import { Pokemon } from '../atoms/ui/Pokemon'
import { SearchBar } from '../atoms/ui/SearchBar'
import { Flex } from '../atoms/utils/Flex'
import { Pagination } from '../molecules/Pagination'
import { PokemonList } from '../molecules/PokemonList'

export const MainContent = () => {
  const [page, setPage] = useState(0)
  const [searchText, setSearchText] = useState('')
  const urlSearchParams = searchText ? `/${searchText}` : `?limit=${PAGINATION.PAGE_SIZE}&offset=${page * PAGINATION.PAGE_SIZE}`
  const { data } = useFetch(`${API_URL}${API_ROUTES.POKEMON}${urlSearchParams}`)

  const pokemonList = data?.results || []

  useEffect(() => {
    setPage(0)
  }, [searchText])

  return (
    <Flex align='center' direction='column' gap='1.5rem'>
      <SearchBar setSearchText={setSearchText} />
      {data?.name ? <Pokemon name={data.name} /> : <PokemonList pokemonList={pokemonList} />}
      <Pagination count={data?.count} page={page} setPage={setPage} />
    </Flex>
  )
}
