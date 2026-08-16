import type { ImmutableObject } from 'jimu-core'
import type { DOCUMENT_VIEWER_WIDGET_ID_CONFIG_KEY } from 'widgets/shared-code/geobim'

export interface Config {
  [DOCUMENT_VIEWER_WIDGET_ID_CONFIG_KEY]: string
}

export type IMConfig = ImmutableObject<Config>
