import styled from 'styled-components'

const StyledLi = styled.li`
  text-transform: capitalize;
`

export const Pokemon = ({ name }) => <StyledLi>{name}</StyledLi>
