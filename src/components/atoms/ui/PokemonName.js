import styled from 'styled-components'

const StyledLi = styled.li`
  text-transform: capitalize;
  list-style-type: none;
  width: fit-content;
`

export const PokemonName = ({ name, ...rest }) => <StyledLi {...rest}>{name}</StyledLi>
