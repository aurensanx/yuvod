import styled from 'styled-components'

const StyledLi = styled.li`
  text-transform: capitalize;
  list-style-type: none;
`

export const Pokemon = ({ name }) => <StyledLi>{name}</StyledLi>
