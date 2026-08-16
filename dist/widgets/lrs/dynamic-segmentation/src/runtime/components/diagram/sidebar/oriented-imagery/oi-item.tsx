/** @jsx jsx */
import { jsx, classNames } from 'jimu-core'
import { Label } from 'jimu-ui'
import { useDynSegRuntimeDispatch } from '../../../../state'
import type { OrientedImageryInfo } from 'widgets/lrs/dynamic-segmentation/src/config'

export interface OIItemProps {
  oiItem: OrientedImageryInfo
}

export function OIItem (props: OIItemProps) {
  const { oiItem } = props
  const dispatch = useDynSegRuntimeDispatch()

  const onItemClicked = () => {
    const updatedOiItem = { ...oiItem, collapsed: !oiItem.collapsed }
    dispatch({ type: 'SET_ORIENTED_IMAGERY_INFO', value: updatedOiItem })
  }

  return (
  <div className={classNames('sidebar-item', !oiItem.collapsed ? 'active' : 'inactive')} onClick={onItemClicked}>
    <Label
      className='label2'
      centric
      style={{ marginBottom: '0' }}>
        {oiItem.layer.title}
    </Label>
  </div>
  )
}