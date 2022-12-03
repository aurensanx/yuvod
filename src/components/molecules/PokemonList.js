import styled from 'styled-components'

import { Pokemon } from '../atoms/ui/Pokemon'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
`

export const PokemonList = ({ pokemonList }) => (
  <StyledUl>
    {pokemonList.map(({ name }) => <Pokemon key={name} name={name} />)}
  </StyledUl>
)
