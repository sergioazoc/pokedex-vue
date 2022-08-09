export interface Pokemon {
  height: number | null
  id: number | null
  name: string | null
  stats: Stat[] | null
  types: Type[] | null
  weight: number | null
}

export interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
  }
}

export interface Type {
  slot: number
  type: {
    name: string
  }
}
