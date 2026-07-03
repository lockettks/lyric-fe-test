import {useBands} from '../hooks/useBands'

export const BandsList = () => {
  const {bands, loading, error} = useBands()

  if (loading) {
    return <p>Loading bands...</p>
  }

  if (error) {
    return <p>Unable to load bands.</p>
  }

  return (
    <ul>
      {bands.map((band) => (
        <li key={band.id}>
          {band.bandName} - {band.album} - {band.genre}
          <p>{band.description}</p>
        </li>
      ))}
    </ul>
  )
}
