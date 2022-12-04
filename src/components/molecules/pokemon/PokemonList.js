import styled from 'styled-components'

import { PokemonName } from '../../atoms/ui/PokemonName'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
`

export const PokemonList = ({ pokemonList }) => (
  <StyledUl data-cy='pokemon-list'>
    {pokemonList.map(({ name }) => <PokemonName key={name} name={name} />)}
  </StyledUl>
)
