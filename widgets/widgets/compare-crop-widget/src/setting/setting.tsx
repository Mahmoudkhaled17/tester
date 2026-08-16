import { React } from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';

export default function Setting(props: AllWidgetSettingProps<any>) {
  return (
    <div className="widget-setting-compare p-2">
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155' }}>
        🗺️ الخريطة مدمجة تلقائياً داخل الويدجت — لا حاجة لإعدادات إضافية.
      </p>
    </div>
  );
}