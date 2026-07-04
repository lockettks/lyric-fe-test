import styled from 'styled-components'
import type {Band} from '../types/band'

interface BandsListProps {
  bands: Band[]
  loading: boolean
  error: Error | null
}

export const BandsList = ({bands, loading, error}: BandsListProps) => {
  if (loading) {
    return <StatusMessage>Loading bands...</StatusMessage>
  }

  if (error) {
    return <StatusMessage>Unable to load bands.</StatusMessage>
  }

  if (bands.length === 0) {
    return <StatusMessage>No bands match your filters.</StatusMessage>
  }

  return (
    <BandGrid aria-label="Band list">
      {bands.map((band) => (
        <BandCard key={band.id}>
          <BandImage
            src={band.imageUrl}
            alt={`${band.bandName} artwork`}
            onError={({currentTarget}) => {
              if (currentTarget.src.endsWith('/sources/default.png')) return

              currentTarget.src = '/sources/default.png'
            }}
          />
          <BandContent>
            <BandName>{band.bandName}</BandName>
            <BandMeta>
              {band.album}
              <span>{band.genre}</span>
            </BandMeta>
            <BandDescription>{band.description}</BandDescription>
          </BandContent>
        </BandCard>
      ))}
    </BandGrid>
  )
}

const StatusMessage = styled.p`
  display: grid;
  min-height: 180px;
  margin: 0;
  place-items: center;
  border-radius: 8px;
  background: #0f0f0f;
  color: #a7adaa;
  font-size: 16px;
`

const BandGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

const BandCard = styled.li`
  overflow: hidden;
  min-width: 0;
  border-radius: 7px;
  background: #000;
`

const BandImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 7.8;
  object-fit: cover;
  background: #181818;
`

const BandContent = styled.div`
  padding: 20px 18px 22px;
`

const BandName = styled.h2`
  margin: 0 0 8px;
  color: #008f80;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.15;
`

const BandMeta = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin: 0 0 16px;
  color: #cbcbcb;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;

  span {
    color: #8f9693;
    text-transform: capitalize;

    &::before {
      content: "/";
      margin-right: 8px;
      color: #4e5452;
    }
  }
`

const BandDescription = styled.p`
  margin: 0;
  color: #9c9c9c;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`
