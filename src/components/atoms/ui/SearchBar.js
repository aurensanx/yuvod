import { useCallback, useEffect, useState } from 'react'

import styled from 'styled-components'

import { useDebounce } from '../../../hooks/useDebounce'


const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid lightgray;
`

export const SearchBar = ({ placeholder, setSearchText }) => {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue)

  const handleChange = useCallback(event => {
    setInputValue(event.target.value)
  }, [])

  useEffect(() => {
    setSearchText(debouncedValue)
  }, [debouncedValue])

  return <StyledInput data-cy='search-bar' onChange={handleChange} placeholder={placeholder} value={inputValue} />
}
