import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  ${({ direction }) => direction ? `flex-direction: ${direction}` : ''};
  ${({ justify }) => justify ? `justify-content: ${justify}` : ''};
  ${({ align }) => align ? `align-items: ${align}` : ''};
  ${({ flex }) => flex ? `flex: ${flex}` : ''};
  ${({ wrap }) => wrap ? `flex-wrap: ${wrap}` : ''};
  ${({ gap }) => gap ? `gap: ${gap}` : ''};
`

export const Flex = ({ children, ...rest }) => <StyledDiv {...rest}>{children}</StyledDiv>
