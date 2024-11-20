import type { Config, Segment } from "~/types/global";
import { useComponentResolver } from "./useComponentResolver";

export const useRenderer = (config: Config) => {
  const layout = computed(() => {
    return config.layout;
  })
  
  const segments = computed(() => {
    const _segments = Object.keys(config.segments) as (keyof Segment)[];
    return _segments;
  })

  const componentNames = computed(() => {
    let names: {name: string; variation: string;}[] = []

    for (const segment of toValue(segments)) {
      names.push(...(config.segments[segment].components.map(c => ({name: c.name, variation: c.variation}))))
    }

    //console.log(names)

    return names
  })

  const components = useComponentResolver(toValue(componentNames))


  return {
    layout,
    segments,
    components
  }
}