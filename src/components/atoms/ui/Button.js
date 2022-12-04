import styled from 'styled-components'

const StyledButton = styled.button`
  ${({ disabled }) => disabled ? '' : 'cursor: pointer'};
  min-width: 3rem;
`

export const Button = ({ disabled, handleClick, children }) => (
  <StyledButton
    disabled={disabled}
    onClick={handleClick}
    type='button'
  >{children}
  </StyledButton>
)
