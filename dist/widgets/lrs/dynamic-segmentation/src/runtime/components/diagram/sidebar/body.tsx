/** @jsx jsx */
import { jsx } from 'jimu-core'
import type { Track } from '../../../../config'
import { Item } from './item'
import { useDynSegRuntimeState } from '../../../state'
import { OIItem } from './oriented-imagery/oi-item'

export interface BodyProps {
  width: number
  trackMap: Map<string, Track>
  onTrackChanged: (trackMap: Map<string, Track>) => void
}

export function Body (props: BodyProps) {
  const { trackMap, width, onTrackChanged } = props
  const {orientedImageryInfo} = useDynSegRuntimeState()

  const handleTrackClicked = (track: Track, trackKey: string) => {
    const newTrackMap = new Map(trackMap)
    newTrackMap.set(trackKey, track)
    onTrackChanged(newTrackMap)
  }

  const getActiveTracks = (): string[] => {
    return [...trackMap.keys()].filter((key) => trackMap.get(key).isActive)
  }

  const getInactiveTracks = (): string[] => {
    return [...trackMap.keys()].filter((key) => !trackMap.get(key).isActive)
  }

  const renderEventTracks = (tracks: string[]) => {
    return tracks.map((trackKey) => {
      return (
        <Item
          key={trackKey}
          trackKey={trackKey}
          track={trackMap.get(trackKey)}
          onTrackClicked={handleTrackClicked}
        />
      )
    })
  }

  return (
  <div className="sidebar-body h-100" style={{ width: width }}>
    {orientedImageryInfo?.enabled && !orientedImageryInfo?.collapsed && (
      <OIItem oiItem={orientedImageryInfo} />
    )}
    { renderEventTracks(getActiveTracks()) }

    {orientedImageryInfo?.enabled && orientedImageryInfo?.collapsed && (
      <OIItem oiItem={orientedImageryInfo} />
    )}
    { renderEventTracks(getInactiveTracks()) }
  </div>
  )
}
