export interface RawBand {
  id: string
  band_name: string
  album: string
  genre: string
}

export interface Band {
  id: string
  bandName: string
  album: string
  genre: string
  description: string
  imageUrl: string
}

export interface BandDetail {
  id: string
  description: string
  album: string
}
