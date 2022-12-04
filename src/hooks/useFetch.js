import { useEffect, useState } from 'react'

export const useFetch = url => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetch(url).
      then(response => response.json()).
      then(setData).
      catch(setError)
  }, [url])

  return { data, error }
}
