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
          <img
            src={band.imageUrl}
            alt={band.bandName}
            onError={(event) => {
              if (event.currentTarget.src.endsWith('/sources/default.png')) {
                return
              }

              event.currentTarget.src = '/sources/default.png'
            }}
          />
          {band.bandName} - {band.album} - {band.genre}
          <p>{band.description}</p>
        </li>
      ))}
    </ul>
  )
}
