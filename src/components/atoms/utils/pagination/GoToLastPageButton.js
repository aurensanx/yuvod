import { useCallback } from 'react'

import { Button } from '../../ui/Button'

export const GoToLastPageButton = ({ disabled, lastPage, setPage }) => {
  const setLastPage = useCallback(() => {
    setPage(lastPage)
  }, [lastPage])

  return <Button disabled={disabled} handleClick={setLastPage}>{'>>'}</Button>
}
