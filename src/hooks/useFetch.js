import { useEffect, useState } from 'react'

export const useFetch = url => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    let isSubscribed = true

    const fetchData = async () => {
      const response = await fetch(url)
      const json = await response.json()

      if (isSubscribed) {
        setData(json)
      }
    }

    fetchData().
      catch(setError)

    return () => {
      isSubscribed = false
    }

  }, [url])

  return { data, error }
}
