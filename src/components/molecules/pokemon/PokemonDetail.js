import styled from 'styled-components'

import { PokemonName } from '../../atoms/ui/PokemonName'
import { Flex } from '../../atoms/utils/Flex'

const StyledPokemon = styled(PokemonName)`
  background-color: yellow;
`

const StyledImg = styled.img`
  width: 6rem;
  height: 6rem;
`

export const PokemonDetail = ({ pokemon }) => (
  <Flex align='center' direction='column'>
    <StyledImg alt={`${pokemon.name} image`} src={pokemon.sprites.front_default} />
    <StyledPokemon data-cy='search-result' forwardedAs='div' name={pokemon.name} />
  </Flex>
)
