# منتجات الأثاث - ملفات JSON

تم تحويل جميع بيانات المنتجات من ملفات JavaScript إلى ملفات JSON منظمة.

## هيكل الملفات

### ملفات JSON منفصلة لكل فئة:
- `data/chairs.json` - بيانات الكراسي (27 منتج)
- `data/sofas.json` - بيانات الأرائك (30 منتج)
- `data/tables.json` - بيانات الطاولات (18 منتج)
- `data/dining.json` - بيانات طاولات الطعام (8 منتجات)
- `data/complements.json` - بيانات المكملات (5 منتجات)
- `data/classic.json` - بيانات الكلاسيك (8 منتجات)

### ملفات JSON شاملة:
- `data/all-products.json` - جميع المنتجات من main.js في ملف واحد
- `data/products.json` - ملف شامل منظم حسب الفئات مع metadata

## كيفية الاستخدام

### 1. تحميل بيانات فئة معينة:
```javascript
// تحميل بيانات الكراسي
fetch('./data/chairs.json')
  .then(response => response.json())
  .then(chairs => {
    console.log('الكراسي:', chairs);
    // استخدام البيانات في التطبيق
  });
```

### 2. تحميل جميع المنتجات:
```javascript
// تحميل جميع المنتجات
fetch('./data/products.json')
  .then(response => response.json())
  .then(data => {
    console.log('جميع الفئات:', data.categories);
    console.log('إجمالي المنتجات:', data.metadata.totalProducts);
  });
```

### 3. البحث في المنتجات:
```javascript
// البحث عن منتج معين
function findProduct(productName) {
  return fetch('./data/products.json')
    .then(response => response.json())
    .then(data => {
      for (let category in data.categories) {
        const product = data.categories[category].products.find(p => 
          p.name.toLowerCase().includes(productName.toLowerCase())
        );
        if (product) return product;
      }
      return null;
    });
}
```

## هيكل البيانات

### منتجات الكراسي والأرائك والطاولات:
```json
{
  "id": 1,
  "name": "اسم المنتج",
  "link": "مسار الصورة",
  "price": 1000,
  "quantity": 0
}
```

### منتجات الطعام والمكملات والكلاسيك:
```json
{
  "id": 1,
  "name": "اسم المنتج",
  "image": "مسار الصورة الأساسية",
  "hoverImage": "مسار الصورة عند التمرير"
}
```

### المنتجات من main.js:
```json
{
  "id": 1,
  "name": "اسم المنتج",
  "link": "مسار الصورة",
  "model": "رقم الموديل",
  "description": "وصف المنتج"
}
```

## المميزات

- ✅ بيانات منظمة ومقسمة حسب الفئات
- ✅ معلومات شاملة لكل منتج
- ✅ سهولة الاستخدام في التطبيقات
- ✅ إمكانية البحث والفلترة
- ✅ دعم للصور المتعددة (أساسية وتمرير)
- ✅ معلومات الأسعار والكميات
- ✅ metadata شامل للملف الرئيسي

## التحديثات المستقبلية

يمكن إضافة المزيد من المعلومات مثل:
- تقييمات المنتجات
- معلومات المخزون
- خصومات وعروض
- معلومات التوصيل
- مراجعات العملاء
