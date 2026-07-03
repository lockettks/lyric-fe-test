import {useEffect, useState} from 'react'
import {getBands} from '../api/getBands'
import type {Band} from '../types/band'

interface UseBandsResult {
  bands: Band[]
  loading: boolean
  error: Error | null
}

export const useBands = (): UseBandsResult => {
  const [bands, setBands] = useState<Band[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const load = async () => {
      setLoading(true)
      setError(null)

      try {
        const loadedBands = await getBands()

        if (isMounted) {
          setBands(loadedBands)
        }
      } catch (caughtError) {
        if (isMounted) {
          setError(
            caughtError instanceof Error
              ? caughtError
              : new Error('Failed to load bands'),
          )
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    void load()

    return () => {
      isMounted = false
    }
  }, [])

  return {bands, loading, error}
}
