import { useCallback } from 'react'

import { Button } from '../../ui/Button'

export const GoToPreviousPageButton = ({ disabled, setPage }) => {
  const setPrevPage = useCallback(() => {
    setPage(prevPage => prevPage - 1)
  }, [])

  return <Button disabled={disabled} handleClick={setPrevPage}>{'<'}</Button>
}
