export type Config = {
  layout: 'pdp',
  segments: Segment
}

export type Segment = Record<'top' | 'main' | 'side' | 'bottom', {
  components: {name: string, variation?: string}[]
}>

export type ComponentInfo = {
  name: string
}