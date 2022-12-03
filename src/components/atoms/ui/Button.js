import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
`

export const Button = ({ disabled, handleClick, children }) => (
  <StyledButton
    disabled={disabled}
    onClick={handleClick}
    type='button'
  >{children}
  </StyledButton>
)
