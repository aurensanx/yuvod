import styled from 'styled-components'

import { Pokemon } from '../atoms/ui/Pokemon'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 10rem;
`

export const PokemonList = ({ pokemonList }) => (
  <StyledUl>
    {pokemonList.map(({ name }) => <Pokemon key={name} name={name} />)}
  </StyledUl>
)
