# دليل ربط ملفات JSON بالبروجيكت

## 📋 نظرة عامة

تم تحويل جميع بيانات المنتجات من arrays مدمجة في ملفات JavaScript إلى ملفات JSON منفصلة ومنظمة. هذا الدليل يوضح كيفية ربط هذه الملفات بالبروجيكت.

## 🔧 الملفات الجديدة

### ملفات JSON:
- `data/chairs.json` - بيانات الكراسي
- `data/sofas.json` - بيانات الأرائك  
- `data/tables.json` - بيانات الطاولات
- `data/dining.json` - بيانات طاولات الطعام
- `data/complements.json` - بيانات المكملات
- `data/classic.json` - بيانات الكلاسيك
- `data/products.json` - ملف شامل لجميع المنتجات

### ملفات JavaScript المحدثة:
- `js/products-sofas-new.js` - ملف الأرائك المحدث
- `js/products-chairs-new.js` - ملف الكراسي المحدث
- `js/data-loader.js` - ملف مشترك لتحميل البيانات

## 🚀 خطوات الربط

### 1. استبدال الملفات القديمة

```bash
# نسخ احتياطي للملفات القديمة
cp js/products-sofas.js js/products-sofas-backup.js
cp js/products-chairs.js js/products-chairs-backup.js

# استبدال بالملفات الجديدة
cp js/products-sofas-new.js js/products-sofas.js
cp js/products-chairs-new.js js/products-chairs.js
```

### 2. تحديث ملفات HTML

في ملفات HTML التي تستخدم هذه الملفات، تأكد من إضافة `data-loader.js` أولاً:

```html
<!-- في head أو قبل ملفات المنتجات -->
<script src="js/data-loader.js"></script>
<script src="js/products-sofas.js"></script>
<script src="js/products-chairs.js"></script>
```

### 3. استخدام البيانات في الكود

#### الطريقة البسيطة (للفئات المنفصلة):
```javascript
// تحميل بيانات الكراسي
async function loadChairs() {
  try {
    const response = await fetch('./data/chairs.json');
    const chairs = await response.json();
    console.log('الكراسي:', chairs);
    // استخدام البيانات...
  } catch (error) {
    console.error('خطأ في التحميل:', error);
  }
}
```

#### الطريقة المتقدمة (باستخدام DataLoader):
```javascript
// تحميل فئة معينة
const chairs = await dataLoader.loadCategoryData('chairs');

// تحميل جميع البيانات
const allData = await dataLoader.loadAllData();

// البحث في المنتجات
const searchResults = await dataLoader.searchProducts('Chair');

// فلترة حسب السعر
const filteredProducts = await dataLoader.filterByPrice(1000, 5000, 'chairs');
```

## 📝 أمثلة عملية

### مثال 1: عرض منتجات ديناميكي
```javascript
async function displayProducts(category) {
  const products = await dataLoader.loadCategoryData(category);
  
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.link}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} جنيه</p>
      <button onclick="addToCart(${product.id})">أضف للسلة</button>
    `;
    container.appendChild(productCard);
  });
}

// استخدام
displayProducts('chairs');
```

### مثال 2: نظام بحث
```javascript
async function searchProducts(query) {
  const results = await dataLoader.searchProducts(query);
  
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>لم يتم العثور على نتائج</p>';
    return;
  }
  
  results.forEach(product => {
    const resultItem = document.createElement('div');
    resultItem.innerHTML = `
      <h4>${product.name}</h4>
      <p>السعر: ${product.price} جنيه</p>
    `;
    resultsContainer.appendChild(resultItem);
  });
}

// استخدام
document.getElementById('search-input').addEventListener('input', (e) => {
  searchProducts(e.target.value);
});
```

### مثال 3: فلترة المنتجات
```javascript
async function filterProducts() {
  const minPrice = document.getElementById('min-price').value;
  const maxPrice = document.getElementById('max-price').value;
  const category = document.getElementById('category').value;
  
  const filteredProducts = await dataLoader.filterByPrice(
    parseInt(minPrice), 
    parseInt(maxPrice), 
    category || null
  );
  
  displayFilteredResults(filteredProducts);
}
```

## 🔄 تحديث باقي الملفات

### تحديث ملفات المنتجات الأخرى:

1. **products-tables.js**:
```javascript
// استبدل الـ array المدمج بـ:
let tables = [];
async function loadTablesData() {
  try {
    const response = await fetch('./data/tables.json');
    tables = await response.json();
    renderTables();
  } catch (error) {
    console.error('خطأ في تحميل بيانات الطاولات:', error);
    tables = []; // بيانات افتراضية
    renderTables();
  }
}
```

2. **products-dining.js**:
```javascript
// استبدل الـ array المدمج بـ:
let diningProducts = [];
async function loadDiningData() {
  try {
    const response = await fetch('./data/dining.json');
    diningProducts = await response.json();
    renderDiningProducts();
  } catch (error) {
    console.error('خطأ في تحميل بيانات طاولات الطعام:', error);
    diningProducts = [];
    renderDiningProducts();
  }
}
```

## 🛠️ نصائح مهمة

### 1. معالجة الأخطاء
```javascript
async function safeLoadData(category) {
  try {
    const data = await dataLoader.loadCategoryData(category);
    return data;
  } catch (error) {
    console.error(`خطأ في تحميل ${category}:`, error);
    // عرض رسالة للمستخدم
    showErrorMessage('حدث خطأ في تحميل البيانات');
    return [];
  }
}
```

### 2. تحسين الأداء
```javascript
// استخدام الكاش
const cachedData = dataLoader.cache.get('chairs');
if (cachedData) {
  // استخدام البيانات المحفوظة
  renderProducts(cachedData);
} else {
  // تحميل البيانات
  loadChairsData();
}
```

### 3. تحديث البيانات ديناميكياً
```javascript
// إضافة منتج جديد
async function addNewProduct(category, productData) {
  try {
    const response = await fetch(`./data/${category}.json`);
    const products = await response.json();
    
    products.push({
      id: Date.now(), // ID فريد
      ...productData
    });
    
    // حفظ البيانات المحدثة (يتطلب خادم)
    await saveData(category, products);
    
    // مسح الكاش
    dataLoader.clearCache();
    
    // إعادة تحميل البيانات
    await dataLoader.loadCategoryData(category);
  } catch (error) {
    console.error('خطأ في إضافة المنتج:', error);
  }
}
```

## 🔍 اختبار الربط

### اختبار بسيط:
```javascript
// في console المتصفح
async function testConnection() {
  try {
    const chairs = await fetch('./data/chairs.json').then(r => r.json());
    console.log('✅ تم تحميل الكراسي بنجاح:', chairs.length, 'منتج');
    
    const allData = await fetch('./data/products.json').then(r => r.json());
    console.log('✅ تم تحميل جميع البيانات:', allData.metadata.totalProducts, 'منتج');
  } catch (error) {
    console.error('❌ خطأ في الاتصال:', error);
  }
}

testConnection();
```

## 📱 دعم المتصفحات

الملفات تستخدم:
- `fetch()` API (مدعوم في جميع المتصفحات الحديثة)
- `async/await` (مدعوم في ES2017+)
- `Map()` (مدعوم في ES6+)

للدعم القديم، يمكن استخدام polyfills أو تحويل الكود إلى ES5.

## 🎯 الخطوات التالية

1. ✅ استبدال ملفات المنتجات
2. ✅ إضافة data-loader.js
3. ✅ اختبار التحميل
4. 🔄 تحديث باقي ملفات المنتجات
5. 🔄 إضافة نظام البحث والفلترة
6. 🔄 تحسين واجهة المستخدم
7. 🔄 إضافة إدارة البيانات (إضافة/تعديل/حذف)

## 📞 الدعم

في حالة وجود مشاكل:
1. تحقق من مسارات الملفات
2. تأكد من تشغيل خادم محلي (Live Server)
3. تحقق من console للأخطاء
4. استخدم البيانات الافتراضية كـ fallback
