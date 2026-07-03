import type {Band, BandDetail, RawBand} from '../types/band'

const DEFAULT_DESCRIPTION = 'No description'

export const bandMapper = (band: RawBand, detail?: BandDetail | null): Band => ({
  id: band.id,
  bandName: band.band_name,
  album: band.album,
  genre: band.genre,
  description: detail?.description ?? DEFAULT_DESCRIPTION,
})
