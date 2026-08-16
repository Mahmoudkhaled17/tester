/** @jsx JSX */
import type { JSX } from 'react'
import { React } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import {
  SettingSection,
  SettingRow,
  MapWidgetSelector,
} from 'jimu-ui/advanced/setting-components'
import {
  defaultSharedMessages,
  DocumentViewerWidgetList,
  FeatureServiceErrors,
  useSharedMessages,
} from 'widgets/shared-code/geobim'
import type { IMConfig } from '../config'
import defaultMessages from './translations/default'
const { useCallback } = React

const DocumentExplorerWidgetSetting = (
  props: AllWidgetSettingProps<IMConfig>,
): JSX.Element => {
  const { useMapWidgetIds, id, intl, theme, manifest, onSettingChange } = props
  const { translateMessage } = useSharedMessages(
    intl,
    manifest.translatedLocales,
  )

  const i18nMessage = useCallback(
    (
      id:
        | keyof typeof defaultMessages
        | keyof typeof defaultSharedMessages.default,
      values?: { [key: string]: string },
    ): string => {
      // NOTE: defaultMessages is last to ensure it takes priority over defaultSharedMessages
      const defaultLocaleMessages = {
        ...defaultSharedMessages.default,
        ...defaultMessages,
      }
      // In the future if strings get loaded by the framework then we can restore
      // the following call to formatMessage and remove the call to translateMessage
      // and the useSharedMessages hook.
      // return intl.formatMessage({ id: id, defaultMessage: messages[id] }, values)
      return translateMessage(id, defaultLocaleMessages, values)
    },
    [translateMessage],
  )

  // NOTE: Despite useMapWidgetIds being an array, MapWidgetSelector only returns one map ID
  const onMapWidgetSelected = (newUseMapWidgetIds: string[]): void => {
    // TODO: Add validation message about GeoBIM feature services! (See Issue #5230)

    // NOTE: It's not documented, but settings will NOT be saved without supplying the ID!
    onSettingChange({ id, useMapWidgetIds: newUseMapWidgetIds })
  }

  return (
    <div className="widget-setting-document-explorer">
      <SettingSection title={i18nMessage('settingsLabel')}>
        <SettingRow>{i18nMessage('selectMapSetting')}</SettingRow>
        <SettingRow>
          <MapWidgetSelector
            autoSelect={true}
            onSelect={onMapWidgetSelected}
            useMapWidgetIds={useMapWidgetIds}
          />
        </SettingRow>
        <SettingRow>
          <FeatureServiceErrors
            useMapWidgetIds={useMapWidgetIds}
            theme={theme}
            errorType="warning"
            noFeatureServiceErrorText={i18nMessage(
              'geobim_noFeatureServiceSettingsWarning',
            )}
            multipleFeatureServicesErrorText={i18nMessage(
              'geobim_multipleFeatureServicesSettingsWarning',
            )}
            infoMessageText={i18nMessage('geobim_featureServicesSettingsTip')}
          />
        </SettingRow>
        <SettingRow>{i18nMessage('selectModelViewer')}</SettingRow>
        <SettingRow>
          <DocumentViewerWidgetList
            noWidgetsText={i18nMessage('geobimNoneSetting')}
            widgetId={id}
          />
        </SettingRow>
      </SettingSection>
    </div>
  )
}

export default DocumentExplorerWidgetSetting
