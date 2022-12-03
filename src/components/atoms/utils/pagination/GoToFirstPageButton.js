import { useCallback } from 'react'

import { Button } from '../../ui/Button'

export const GoToFirstPageButton = ({ disabled, setPage }) => {
  const setFirstPage = useCallback(() => {
    setPage(0)
  }, [])

  return <Button disabled={disabled} handleClick={setFirstPage}>{'<<'}</Button>

}

