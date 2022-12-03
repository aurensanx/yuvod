import { useCallback } from 'react'

import { Button } from '../../ui/Button'

export const GoToNextPageButton = ({ disabled, setPage }) => {
  const setNextPage = useCallback(() => {
    setPage(prevPage => prevPage + 1)
  }, [])

  return <Button disabled={disabled} handleClick={setNextPage}>{'>'}</Button>
}
