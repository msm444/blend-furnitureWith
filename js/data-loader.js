// ملف مشترك لتحميل البيانات من ملفات JSON

class DataLoader {
  constructor() {
    this.cache = new Map();
  }

  // تحميل بيانات فئة معينة
  async loadCategoryData(category) {
    // التحقق من الكاش أولاً
    if (this.cache.has(category)) {
      return this.cache.get(category);
    }

    try {
      const response = await fetch(`./data/${category}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // حفظ في الكاش
      this.cache.set(category, data);
      return data;
    } catch (error) {
      console.error(`خطأ في تحميل بيانات ${category}:`, error);
      return this.getDefaultData(category);
    }
  }

  // تحميل جميع البيانات
  async loadAllData() {
    try {
      const response = await fetch('./data/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('خطأ في تحميل جميع البيانات:', error);
      return null;
    }
  }

  // البيانات الافتراضية في حالة فشل التحميل
  getDefaultData(category) {
    const defaultData = {
      chairs: [
        { name: "Authentic", link: "./images/chairs/DC-296-DC-297-400x400.jpg", price: 1550, quantity: 0, id: 30 },
        { name: "Captain Chair I", link: "./images/chairs/DC-121.jpg", price: 5000, quantity: 0, id: 32 }
      ],
      sofas: [
        { name: "Leclair", link: "./images/sofas/Léclair-2-705x705.jpg", price: 1000, quantity: 0, id: 1 },
        { name: "Cocò L-shape/Corner", link: "./images/sofas/coco-9-705x705.jpg", price: 1700, quantity: 0, id: 2 }
      ],
      tables: [
        { name: "Benny", link: "./images/Tables/WEB11-450x450.jpg", price: 1800, quantity: 0, id: 1 },
        { name: "Benny Keramik", link: "./images/Tables/web2-9-450x450.jpg", price: 1000, quantity: 0, id: 2 }
      ],
      dining: [
        { id: 1, name: "Arizona", image: "images/dining/Copy of web1-14-450x450 (1).jpg", hoverImage: "images/dining/1942AE55-658F-4425-94C1-1E67471F7A09-450x450.jpg" }
      ],
      complements: [
        { id: 1, name: "Ferula", image: "images/complements/5-4-705x705.jpg", hoverImage: "images/complements/1-5-705x705.jpg" }
      ],
      classic: [
        { id: 1, name: "Ferula", image: "images/classic/DC-028-400x400.jpg" }
      ]
    };

    return defaultData[category] || [];
  }

  // مسح الكاش
  clearCache() {
    this.cache.clear();
  }

  // البحث في المنتجات
  async searchProducts(query, category = null) {
    try {
      let data;
      if (category) {
        data = await this.loadCategoryData(category);
      } else {
        const allData = await this.loadAllData();
        data = allData ? Object.values(allData.categories).flatMap(cat => cat.products) : [];
      }

      if (!Array.isArray(data)) return [];

      return data.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error('خطأ في البحث:', error);
      return [];
    }
  }

  // فلترة المنتجات حسب السعر
  async filterByPrice(minPrice, maxPrice, category = null) {
    try {
      let data;
      if (category) {
        data = await this.loadCategoryData(category);
      } else {
        const allData = await this.loadAllData();
        data = allData ? Object.values(allData.categories).flatMap(cat => cat.products) : [];
      }

      if (!Array.isArray(data)) return [];

      return data.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
      );
    } catch (error) {
      console.error('خطأ في الفلترة:', error);
      return [];
    }
  }
}

// إنشاء instance عام
const dataLoader = new DataLoader();

// دوال مساعدة للاستخدام المباشر
async function loadChairsData() {
  return await dataLoader.loadCategoryData('chairs');
}

async function loadSofasData() {
  return await dataLoader.loadCategoryData('sofas');
}

async function loadTablesData() {
  return await dataLoader.loadCategoryData('tables');
}

async function loadDiningData() {
  return await dataLoader.loadCategoryData('dining');
}

async function loadComplementsData() {
  return await dataLoader.loadCategoryData('complements');
}

async function loadClassicData() {
  return await dataLoader.loadCategoryData('classic');
}

async function loadAllProductsData() {
  return await dataLoader.loadAllData();
}

// تصدير للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DataLoader, dataLoader };
}
