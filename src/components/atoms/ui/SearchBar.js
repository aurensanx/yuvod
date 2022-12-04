import { useCallback, useEffect, useState } from 'react'

import { useDebounce } from '../../../hooks/useDebounce'

export const SearchBar = ({ setSearchText }) => {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue)

  const handleChange = useCallback(event => {
    setInputValue(event.target.value)
  }, [])

  useEffect(() => {
    setSearchText(debouncedValue)
  }, [debouncedValue])

  return <input data-cy='search-bar' onChange={handleChange} value={inputValue} />
}
