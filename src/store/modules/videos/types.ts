export type StateProps = {
  result: ResultPropType
}

export type ResultPropType = {
  count: number,
  start: number,
  per_page: number,
  page: number,
  time_ms: number,
  total_count: number,
  total_pages: number,
  videos: VideoPropType[]
}

export type VideoPropType = {
  id: string,
  title: string
  keywords: string
  views: number
  rate: string
  url: string
  added: string
  length_sec: number
  length_min: string
  embed: string
  default_thumb: Record<string, unknown>
}