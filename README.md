# GAIP Experience Builder Widgets & Web App

تطبيق GAIP — Experience Builder web app + الويدجتات المخصصة (تحليل المحاصيل، المقارنة التاريخية بخريطة 3 طبقات، تسجيل الدخول، الهيدر).

## البنية

```
widgets/          → كود المصدر للـ Experience Builder widgets المخصصة
dist/             → الـ web app المبني (Experience Builder output) — يُنشر على GitHub Pages
```

## النشر (GitHub Pages)

أي push على `main` يشغّل workflow `deploy.yml` وينشر مجلد `dist/` تلقائياً.

الرابط: `https://mahmoudkhaled17.github.io/tester/`

## الـ widgets المخصصة

| Widget | الوظيفة |
|---|---|
| `analysis-widget` | تحليل NDVI وتصنيف المحاصيل + إدارة النقاط |
| `compare-crop-widget` | مقارنة 3 سنوات + خريطة تفاعلية 3 طبقات (satellite + crop_type + crop_health) |
| `auth-widget` | تسجيل دخول وإنشاء حساب (Tester backend) |
| `header-widget` | الهيدر والتنقل |

## ملاحظات

- الـ backend: `https://tester.152-53-231-71.sslip.io`
- إصدار Experience Builder: 1.21.0