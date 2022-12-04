import { useState } from 'react'

import styled from 'styled-components'

import { API_ROUTES, API_URL } from '../../constants/api'
import { PAGINATION } from '../../constants/pagination'
import { useFetch } from '../../hooks/useFetch'
import { SearchBar } from '../atoms/ui/SearchBar'
import { Flex } from '../atoms/utils/Flex'
import { PokemonSearchResult } from '../molecules/pokemon/PokemonSearchResult'

const ResultWrapper = styled(Flex)`
  width: 18rem;
`

export const MainContent = () => {
  const [page, setPage] = useState(0)
  const [searchText, setSearchText] = useState('')
  const urlSearchParams = searchText ? `/${searchText}` : `?limit=${PAGINATION.PAGE_SIZE}&offset=${page * PAGINATION.PAGE_SIZE}`
  const { data } = useFetch(`${API_URL}${API_ROUTES.POKEMON}${urlSearchParams}`)

  return (
    <Flex align='center' direction='column'>
      <ResultWrapper direction='column' gap='1.5rem'>
        <SearchBar setSearchText={setSearchText} />
        <PokemonSearchResult data={data} page={page} setPage={setPage} />
      </ResultWrapper>
    </Flex>
  )
}
