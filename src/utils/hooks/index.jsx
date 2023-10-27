import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setdata] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
      async function fetchData() {
        setIsLoading(true)
        try {
          const response = await fetch(url)
          const data = await response.json()
          setdata(data)
        }
        catch(err) {
          console.log(err)
          setError(true)
        }
        finally {
          setIsLoading(false)
        }
      }
      fetchData()
  }, [url])
  return { isLoading, data }
}
