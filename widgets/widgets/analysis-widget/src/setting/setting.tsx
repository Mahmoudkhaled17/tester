import React from 'react';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';

export default function Setting(props: AllWidgetSettingProps<any>) {
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

  return (
    <div className="widget-setting-analysis p-3">
      <div className="form-group">
        <label className="font-weight-bold">اختر الخريطة المرتبطة:</label>
        <MapWidgetSelector
          useMapWidgetIds={props.useMapWidgetIds}
          onSelect={onMapWidgetSelected}
        />
      </div>
    </div>
  );
}