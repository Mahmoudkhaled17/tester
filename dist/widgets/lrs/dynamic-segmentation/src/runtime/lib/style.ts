import { type IMThemeVariables, css, type SerializedStyles } from 'jimu-core'
import { colorUtils } from 'jimu-theme'
import { SLD_ICON_WIDTH, SLD_INACTIVE_HEIGHT, SLD_ITEM_HEIGHT, SLD_ITEM_INACTIVE_HEIGHT, SLD_TRACK_HEIGHT } from '../../constants'

export function getStyle (theme: IMThemeVariables, tableHighlightColor: string): SerializedStyles {
  return css`
    .table-indent {
      background-color: ${theme.sys.color.surface.paper};
      width: calc(100% - 32px);
      height: calc(100% - 26px);
      margin: 0px 16px 16px;
      display: inline-block;
    }
    .dyn-seg-table-container {
      background-color: ${theme.sys.color.surface.paper};
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
    .dyn-seg-row {
       --calcite-table-row-border-color: ${theme.sys.color.surface.background};
    }
    .dyn-seg-cell.edited {
      --calcite-table-cell-background-color: ${colorUtils.colorMixOpacity(theme.sys.color.warning.light, 0.4)};
    }
    .dyn-seg-cell.non-editable {
      --calcite-table-cell-background-color: ${colorUtils.colorMixOpacity(theme.sys.color.action.disabled.default, 0.2)};
    }
    .dyn-seg-cell.error {
      --calcite-table-cell-background-color: ${colorUtils.colorMixOpacity(theme.sys.color.error.main, 0.2)};
    }
    .dyn-seg-column-header {
       --calcite-table-header-background-color: ${theme.sys.color.surface.background};
    }
    .dyn-seg-row-header {
      --calcite-table-cell-background-color: ${theme.sys.color.surface.background};
    }
    .dyn-seg-row-header.selected {
      --calcite-table-cell-background-color: ${tableHighlightColor};
    }
    .header-divider {
      border-left: 1px solid red;
      height: auto;
    }
    .header-divider::hover {
      border-left: 1px solid ${colorUtils.colorMixOpacity(theme.sys.color.primary.light, 0.3)};
      height: 100%;
    }
    .toast-container {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.7);
      top: 0;
      z-index: 5;
    }
    .toast {
      position: relative;
      z-index: 999;
      }
    .toast-notice {
      transform: translateY(100px);
    }
    .sidebar-header {
      background-color: ${theme.sys.color.surface.background};
      border: 1px solid ${theme.sys.color.divider.primary};
      padding: 0px 16px;
      height: ${SLD_TRACK_HEIGHT}px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sidebar-icon {
      width: 24px;
      height: 24px;
    }
    .sidebar-icon:hover {
      cursor: pointer;
      border: 1px solid ${theme.sys.color.primary.main};
    }
    .header-actions {
      align-content: center;
    }
    .sidebar-item.active {
      background-color: ${theme.sys.color.surface.background};
      border: 1px solid ${theme.sys.color.divider.primary};
      padding: 0px 16px;
      height: ${SLD_TRACK_HEIGHT}px;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .sidebar-item.inactive {
      background-color: ${theme.sys.color.surface.background};
      border: 1px solid ${theme.sys.color.divider.primary};
      padding: 0px 16px;
      height: ${SLD_INACTIVE_HEIGHT}px;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .sidebar-item:hover {
      cursor: pointer;
      border: 1px solid ${theme.sys.color.primary.main};
      background-color: ${theme.sys.color.action.hover};
    }
    .sidebar-item:focus-visible {
      outline: 2px solid ${theme.sys.color.primary.main};
      outline-offset: -2px;
    }
    .sidebar-resizer {
      width: 10px;
      margin: 0px -5px;
      z-index: 1;
    }
    .sidebar-resizer:hover {
      border-left: 5px solid ${colorUtils.colorMixOpacity(theme.sys.color.divider.inputField, 0.5)};
      border-right: 5px solid ${colorUtils.colorMixOpacity(theme.sys.color.divider.inputField, 0.5)};
      cursor: col-resize;
      }
    .header {
      height: ${SLD_TRACK_HEIGHT}px;
    }
    .diagram-container {
      overflow: hidden;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
    .sidebar-container {
      overflow: auto;
      scrollbar-width: none;
      flex-direction: row;
    }
    .sld-container {
      flex-direction: row;
      overflow: auto;
    }
    .sld-row.active {
      border: 1px solid ${theme.sys.color.divider.primary};
      background-color: ${theme.sys.color.surface.paper};
      height: ${SLD_TRACK_HEIGHT}px;
    }
    .sld-row.inactive {
      border: 1px solid ${theme.sys.color.divider.primary};
      background-color: ${theme.sys.color.surface.paper};
      height: ${SLD_INACTIVE_HEIGHT}px;
    }
    .sld-body {
      overflow: hidden;
    }
    .sld-item-line-active {
      height: ${SLD_ITEM_HEIGHT}px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      border-radius: 5px;
      border: 1px solid ${theme.sys.color.divider.primary};
    }
    .sld-item-line-active:focus-visible {
      outline: 2px solid ${theme.sys.color.primary.main};
      outline-offset: -2px;
    }
    .sld-item-point-active {
      height: ${SLD_ICON_WIDTH}px;
      width: ${SLD_ICON_WIDTH}px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
    .sld-item-point-active:focus-visible {
      outline: 2px solid ${theme.sys.color.primary.main};
      border-radius: 2px;
    }
    .sld-item-line-inactive {
      height: ${SLD_ITEM_INACTIVE_HEIGHT}px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      border-radius: 5px;
      border: 1px solid ${theme.sys.color.divider.primary};
      background: ${theme.sys.color.action.disabled.text};
    }
    .sld-item-point-inactive {
      height: ${SLD_INACTIVE_HEIGHT}px;
      width: ${SLD_INACTIVE_HEIGHT}px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
    .sld-item-label-wrapper {
      overflow: hidden;
      height: ${SLD_INACTIVE_HEIGHT}px;
      line-height: ${SLD_INACTIVE_HEIGHT}px;
      margin: 4px;
      text-align: center;
    }
    .sld-item-selected-line {
      z-index: 1;
      border: 1px solid ${theme.sys.color.primary.main};
      box-shadow: 0 0 3px 1px ${theme.sys.color.primary.main};
    }
    .sld-item-selected-point {
      z-index: 1;
      filter: drop-shadow(0 0 4px ${theme.sys.color.primary.main});
    }
    .sld-item-edited-point {
      border-radius: 2px;
      filter: drop-shadow(0 0 4px ${theme.sys.color.warning.main});
    }
    .sld-item-edited-line {
      border: 1px solid ${theme.sys.color.warning.main};
      box-shadow: 0 0 3px 1px ${theme.sys.color.warning.main};
    }
    .sld-item-label-wrapper::before {
      content: '';
      display: inline-block;
    }
    .sld-item-label {
      display: inline-block;
      height: ${SLD_INACTIVE_HEIGHT}px;
      margin: 0px;
      padding: 0px 5px;
      text-align: center;
      align-content: center;
      font-weight: 700;
      border-radius: 5px;
    }
    .sld-item-line-active:hover{
      z-index: 1;
      border: 1px solid ${theme.sys.color.primary.main};
      box-shadow: 0 0 3px 1px ${theme.sys.color.primary.main};
    }
    .sld-item-point-active:hover {
      z-index: 1;
      filter: drop-shadow(0 0 3px ${theme.sys.color.primary.main});
    }
    .sld-item-oi-point-active {
      height: ${SLD_ICON_WIDTH}px;
      width: ${SLD_ICON_WIDTH}px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      background: transparent;
    }
    .sld-item-oi-point-active:focus-visible {
      outline: 2px solid ${theme.sys.color.primary.main};
      border-radius: 2px;
    }
    .sld-item-oi-point-selected {
      z-index: 12;
      filter: drop-shadow(0 0 3px rgba(255, 76, 76, 1));
      position: relative;
    }
    .sld-item-oi-point-selected::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 102, 102, 0.35);
      border-radius: 50%;
      pointer-events: none;
    }
    .sld-item-point-container {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      pointer-events: none;
    }
    .sld-item-point-container > * {
      pointer-events: auto;
    }
    .sld-item-point-label-wrapper {
      position: absolute;
      text-align: center;
      white-space: nowrap;
      pointer-events: none;
      z-index: 0;
      max-width: 120px;
      min-width: auto;
      transition: opacity 0.15s ease-in;
      will-change: opacity;
    }
    .sld-item-point-label-wrapper.label-right {
      left: calc(${SLD_ICON_WIDTH}px + 6px);
    }
    .sld-item-point-label-wrapper.label-left {
      right: calc(${SLD_ICON_WIDTH}px - 16px);
    }
    .sld-item-point-label-wrapper:hover {
      z-index: 2;
    }
    .sld-item-point-label {
      display: inline-block;
      margin: 0px;
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      border-radius: 3px;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.2;
      position: relative;
    }
    .sld-marker {
      position: absolute;
      z-index: 2;
      top: ${SLD_TRACK_HEIGHT}px;
      bottom: 0;
      margin-left: 1px;
      border-left: 2px dashed;
      opacity: 0;
      pointer-events: none;
    }
    .sld-marker--pointer {
      color: ${theme.sys.color.action.focus};
    }
    .sld-marker.sld-is-visible {
      opacity: 1;
    }
    &.formDiv{
      .esri-feature-form {
        background-color: ${theme.sys.color.surface.paper};
      }
    }
  `
}
