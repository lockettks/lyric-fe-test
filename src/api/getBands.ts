import bandsJson from '../../mock_data/bands.json?raw'
import type {Band, BandDetail, RawBand} from '../types/band'
import {bandMapper} from '../utils/bandMapper'

const detailJsonByPath = import.meta.glob('../../mock_data/*.json', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const parseJson = <T>(json: string): T | null => {
  try {
    return JSON.parse(json) as T
  } catch {
    return null
  }
}

const getBandDetail = (id: string): BandDetail | null => {
  const detailJson = detailJsonByPath[`../../mock_data/${id}.json`]

  if (!detailJson) {
    return null
  }

  return parseJson<BandDetail>(detailJson)
}

export const getBands = (): Band[] => {
  const rawBands = JSON.parse(bandsJson) as RawBand[]

  return rawBands.map((band) => bandMapper(band, getBandDetail(band.id)))
}
