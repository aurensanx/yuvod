import styled from 'styled-components'

import { API_ROUTES, API_URL } from '../../constants/api'
import { PAGINATION } from '../../constants/pagination'
import { useFetch } from '../../hooks/useFetch'
import { Pokemon } from '../atoms/Pokemon'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const PokemonList = () => {
  const { data } = useFetch(`${API_URL}${API_ROUTES.POKEMON}?limit=${PAGINATION.PAGE_SIZE}`)

  const pokemonList = data?.results || []

  return (
    <StyledUl>
      {pokemonList.map(({ name }) => <Pokemon key={name} name={name} />)}
    </StyledUl>
  )
}
