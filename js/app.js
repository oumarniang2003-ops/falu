// Fall Business E-Commerce App Global JavaScript

// Default Catalog Products
const PRODUCTS = [
  // --- TELEVISIONS & SON (Category: tvs) ---
  {
    id: "1",
    name: "Smart TV Google QLED 55\"",
    price: 190000,
    oldPrice: 220000,
    brand: "SAMSUNG",
    image: "images/products/samsung-smart-tv-google-qled-55.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "PROMO"
  },
  {
    id: "2",
    name: "Smart TV Google 43\" Android 14",
    price: 105000,
    oldPrice: 120000,
    brand: "ASTECH",
    image: "images/products/astech-smart-tv-google-43-android-14.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 4,
    badge: "POPULAIRE"
  },
  {
    id: "3",
    name: "Smart TV Google WebOS 65\"",
    price: 305000,
    oldPrice: 350000,
    brand: "LG",
    image: "images/products/lg-smart-tv-google-webos-65.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "TOP PRODUIT"
  },
  {
    id: "4",
    name: "Smart TV Google 85\" Ultra HD",
    price: 585000,
    oldPrice: 650000,
    brand: "SAMSUNG",
    image: "images/products/samsung-smart-tv-google-85-ultra-hd.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "PREMIUM"
  },
  {
    id: "tv-32",
    name: "Smart TV Google 32\" HD Android",
    price: 70000,
    oldPrice: 85000,
    brand: "ASTECH",
    image: "images/products/astech-smart-tv-google-43-android-14.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 4,
    badge: "PRIX BAS"
  },
  {
    id: "tv-53",
    name: "Smart TV Google 53\" Ultra HD",
    price: 175000,
    oldPrice: 200000,
    brand: "ROCH",
    image: "images/products/samsung-smart-tv-google-qled-55.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "EXCLUSIF"
  },
  {
    id: "tv-58",
    name: "Smart TV Google 58\" 4K HDR",
    price: 205000,
    oldPrice: 235000,
    brand: "HISENSE",
    image: "images/products/lg-smart-tv-google-webos-65.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "TOP VENTE"
  },
  {
    id: "tv-75",
    name: "Smart TV Google 75\" 4K UHD",
    price: 430000,
    oldPrice: 490000,
    brand: "LG",
    image: "images/products/samsung-smart-tv-google-85-ultra-hd.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "PREMIUM"
  },
  {
    id: "5",
    name: "Système Home Cinéma Woofer Roch 5.1",
    price: 45000,
    oldPrice: 55000,
    brand: "ROCH",
    image: "images/products/roch-systeme-home-cinema-woofer-roch-51.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "QUALITÉ HD"
  },
  {
    id: "6",
    name: "Enceinte Woofer Roch portable",
    price: 18000,
    oldPrice: 24000,
    brand: "ROCH",
    image: "images/products/roch-enceinte-woofer-roch-portable.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 4,
    badge: "BASS BOOST"
  },
  {
    id: "7",
    name: "Enceinte Woofer Roch 2.1 Soundbar",
    price: 35000,
    oldPrice: 42000,
    brand: "ROCH",
    image: "images/products/roch-enceinte-woofer-roch-21-soundbar.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 5,
    badge: "NOUVEAU"
  },

  // --- REFRIGERATEURS & CONGELATEURS (Category: refrigerators) ---
  {
    id: "8",
    name: "Réfrigérateur Smart 4 portes Inox 450L",
    price: 680000,
    oldPrice: 750000,
    brand: "LG",
    image: "images/products/lg-refrigerateur-smart-4-portes-inox-450l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "PREMIUM"
  },
  {
    id: "9",
    name: "Réfrigérateur Astech avec Fontaine 250L",
    price: 185000,
    oldPrice: 210000,
    brand: "ASTECH",
    image: "images/products/astech-refrigerateur-astech-avec-fontaine-250l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "FONTAINE"
  },
  {
    id: "10",
    name: "Réfrigérateur Double Porte Roch 220L",
    price: 135000,
    oldPrice: 155000,
    brand: "ROCH",
    image: "images/products/roch-refrigerateur-double-porte-roch-220l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "PROMO"
  },
  {
    id: "11",
    name: "Réfrigérateur Smart Double Porte 350L",
    price: 245000,
    oldPrice: 280000,
    brand: "SMART",
    image: "images/products/smart-refrigerateur-smart-double-porte-350l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "TOP VENTE"
  },
  {
    id: "12",
    name: "Vitrine Réfrigérée Smart Beverage Cooler",
    price: 285000,
    oldPrice: 320000,
    brand: "SMART",
    image: "images/products/smart-vitrine-refrigeree-smart-beverage-cooler.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "VITRINE"
  },
  {
    id: "13",
    name: "Réfrigérateur compact Sharp 195L",
    price: 148000,
    oldPrice: 165000,
    brand: "SHARP",
    image: "images/products/sharp-refrigerateur-compact-sharp-195l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "PROMO"
  },
  {
    id: "14",
    name: "Smart TV Google 46\" Full HD",
    price: 115000,
    oldPrice: 135000,
    brand: "SMART",
    image: "images/products/smart-smart-tv-google-46-full-hd.webp",
    category: "tvs",
    categoryDisplay: "Télévisions & Son",
    rating: 4,
    badge: "NOUVEAU"
  },
  {
    id: "15",
    name: "Réfrigérateur Astech Double Porte 160L",
    price: 110000,
    oldPrice: 125000,
    brand: "ASTECH",
    image: "images/products/astech-refrigerateur-astech-double-porte-160l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "PRIX BAS"
  },
  {
    id: "16",
    name: "Congélateur Coffre Hisense 250L",
    price: 165000,
    oldPrice: 185000,
    brand: "HISENSE",
    image: "images/products/hisense-congelateur-coffre-hisense-250l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "PROMO"
  },
  {
    id: "17",
    name: "Congélateur Coffre Roch 150L",
    price: 115000,
    oldPrice: 130000,
    brand: "ROCH",
    image: "images/products/roch-congelateur-coffre-roch-150l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "COMPACT"
  },
  {
    id: "18",
    name: "Congélateur Coffre Smart 300L",
    price: 175000,
    oldPrice: 195000,
    brand: "SMART",
    image: "images/products/smart-congelateur-coffre-smart-300l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "POPULAIRE"
  },
  {
    id: "19",
    name: "Congélateur Coffre Roch 250L",
    price: 145000,
    oldPrice: 165000,
    brand: "ROCH",
    image: "images/products/roch-congelateur-coffre-roch-250l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "GARANTIE"
  },
  {
    id: "20",
    name: "Congélateur Smart vertical compact 100L",
    price: 95000,
    oldPrice: 110000,
    brand: "SMART",
    image: "images/products/smart-congelateur-smart-vertical-compact-100l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "VERTICAL"
  },
  {
    id: "21",
    name: "Congélateur Coffre Grand Modèle 400L",
    price: 210000,
    oldPrice: 240000,
    brand: "ROCH",
    image: "images/products/roch-congelateur-coffre-grand-modele-400l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 5,
    badge: "LARGE"
  },
  {
    id: "22",
    name: "Congélateur Coffre Astech 200L",
    price: 130000,
    oldPrice: 145000,
    brand: "ASTECH",
    image: "images/products/astech-congelateur-coffre-astech-200l.webp",
    category: "refrigerators",
    categoryDisplay: "Réfrigérateurs & Congélateurs",
    rating: 4,
    badge: "PROMO"
  },

  // --- MACHINES A LAVER & APPAREILS DE CUISINE (Category: washing_machines) ---
  {
    id: "23",
    name: "Machine à laver Deska Frontale 7kg",
    price: 155000,
    oldPrice: 180000,
    brand: "DESKA",
    image: "images/products/deska-machine-a-laver-deska-frontale-7kg.webp",
    category: "washing_machines",
    categoryDisplay: "Machines à Laver",
    rating: 4,
    badge: "SPECIAL"
  },
  {
    id: "24",
    name: "Machine à laver Smart Frontale 8kg",
    price: 195000,
    oldPrice: 220000,
    brand: "SMART",
    image: "images/products/smart-machine-a-laver-smart-frontale-8kg.webp",
    category: "washing_machines",
    categoryDisplay: "Machines à Laver",
    rating: 5,
    badge: "TOP VENTE"
  },
  {
    id: "25",
    name: "Machine à laver Smart Semi-automatique 8kg",
    price: 135000,
    oldPrice: 150000,
    brand: "SMART",
    image: "images/products/smart-machine-a-laver-smart-semi-automatique-8kg.webp",
    category: "washing_machines",
    categoryDisplay: "Machines à Laver",
    rating: 4,
    badge: "PROMO"
  },
  {
    id: "26",
    name: "Machine à laver Astech Frontale 8kg",
    price: 198000,
    oldPrice: 225000,
    brand: "ASTECH",
    image: "images/products/astech-machine-a-laver-astech-frontale-8kg.webp",
    category: "washing_machines",
    categoryDisplay: "Machines à Laver",
    rating: 5,
    badge: "NOUVEAU"
  },
  {
    id: "27",
    name: "Machine à laver Smart Frontale 10kg",
    price: 290000,
    oldPrice: 320000,
    brand: "SMART",
    image: "images/products/smart-machine-a-laver-smart-frontale-10kg.webp",
    category: "washing_machines",
    categoryDisplay: "Machines à Laver",
    rating: 5,
    badge: "CAPACITÉ XXL"
  },
  {
    id: "28",
    name: "Cuisinière 4 feux Roch Inox",
    price: 78000,
    oldPrice: 90000,
    brand: "ROCH",
    image: "images/products/roch-cuisiniere-4-feux-roch-inox.webp",
    category: "washing_machines",
    categoryDisplay: "Cuisinières & Cuisson",
    rating: 4,
    badge: "INOX"
  },
  {
    id: "29",
    name: "Cuisinière Smart 4 feux 50x50",
    price: 82000,
    oldPrice: 95000,
    brand: "SMART",
    image: "images/products/smart-cuisiniere-smart-4-feux-50x50.webp",
    category: "washing_machines",
    categoryDisplay: "Cuisinières & Cuisson",
    rating: 5,
    badge: "NOUVEAU"
  },
  {
    id: "30",
    name: "Cuisinière Astech 4 feux Inox",
    price: 85000,
    oldPrice: 100000,
    brand: "ASTECH",
    image: "images/products/astech-cuisiniere-astech-4-feux-inox.webp",
    category: "washing_machines",
    categoryDisplay: "Cuisinières & Cuisson",
    rating: 5,
    badge: "GARANTIE"
  },

  // --- CLIMATISEURS & PETITS APPAREILS (Category: climatiseurs / washing_machines) ---
  {
    id: "31",
    name: "Climatiseur Split LG 1.5 CV",
    price: 265000,
    oldPrice: 295000,
    brand: "LG",
    image: "images/products/lg-climatiseur-split-lg-15-cv.webp",
    category: "climatiseurs",
    categoryDisplay: "Climatisation",
    rating: 5,
    badge: "INVERTER"
  },
  {
    id: "32",
    name: "Climatiseur Split Haier 1.5 CV",
    price: 215000,
    oldPrice: 240000,
    brand: "HAIER",
    image: "images/products/haier-climatiseur-split-haier-15-cv.webp",
    category: "climatiseurs",
    categoryDisplay: "Climatisation",
    rating: 5,
    badge: "COMPRESSEUR"
  },
  {
    id: "33",
    name: "Climatiseur Split Astech 1.5 CV",
    price: 205000,
    oldPrice: 230000,
    brand: "ASTECH",
    image: "images/products/astech-climatiseur-split-astech-15-cv.webp",
    category: "climatiseurs",
    categoryDisplay: "Climatisation",
    rating: 4,
    badge: "PROMO"
  },
  {
    id: "34",
    name: "Fontaine Eau avec Réfrigérateur intégré",
    price: 85000,
    oldPrice: 98000,
    brand: "SMART",
    image: "images/products/smart-fontaine-eau-avec-refrigerateur-integre.webp",
    category: "refrigerators",
    categoryDisplay: "Distributeur Eau",
    rating: 4,
    badge: "FONTAINE"
  },
  {
    id: "35",
    name: "Mixeur Blender Haier Inox 2 en 1",
    price: 18000,
    oldPrice: 25000,
    brand: "HAIER",
    image: "images/products/haier-mixeur-blender-haier-inox-2-en-1.webp",
    category: "washing_machines",
    categoryDisplay: "Petit Électroménager",
    rating: 5,
    badge: "PROMO"
  },
  {
    id: "36",
    name: "Micro-ondes Digital Haier 20L",
    price: 45000,
    oldPrice: 55000,
    brand: "HAIER",
    image: "images/products/haier-micro-ondes-digital-haier-20l.webp",
    category: "washing_machines",
    categoryDisplay: "Petit Électroménager",
    rating: 4,
    badge: "MINUTERIE"
  }
];

window.PRODUCTS = PRODUCTS;


class ECommerceApp {
  constructor() {
    this.cartKey = 'fall_business_cart';
    this.cart = this.loadCart();
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateCartBadge();
    });
  }

  async fetchProducts() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          window.PRODUCTS = data;
          console.log("Products successfully loaded from Postgres database API!");
        }
      }
    } catch (e) {
      console.warn("Failed to fetch products from database API, using local hardcoded fallback products array.", e);
    }
  }

  // Load cart items from localStorage
  loadCart() {
    try {
      const stored = localStorage.getItem(this.cartKey);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
      return [];
    }
  }

  // Save cart items to localStorage and notify UI
  saveCart() {
    try {
      localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
      this.updateCartBadge();
      // Dispatch custom event to let other page listeners know the cart updated
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: this.cart }));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }

  // Add a product to the cart
  addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
      this.showToast("Produit non trouvé.", "error");
      return;
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += parseInt(quantity);
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        categoryDisplay: product.categoryDisplay,
        quantity: parseInt(quantity)
      });
    }

    this.saveCart();
    this.showToast(`"${product.name}" ajouté au panier !`, "success");
  }

  // Remove a product from the cart
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.showToast("Produit retiré du panier.", "success");
  }

  // Update product quantity in the cart
  updateQuantity(productId, quantity) {
    const qty = parseInt(quantity);
    if (qty <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = qty;
      this.saveCart();
    }
  }

  // Clear all items in cart
  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  // Get total quantity of items in cart
  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Get total price of items in cart (excluding delivery fee)
  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Update cart badge counts globally
  updateCartBadge() {
    const count = this.getCartCount();
    document.querySelectorAll('#cart-badge-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  // Format price helper e.g. 450000 -> "450.000 FCFA"
  formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price) + " FCFA";
  }

  // Show premium toast notification
  showToast(message, type = "success") {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = type === "success" ? "✓" : "⚠";
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  // Dynamically inject Schema.org JSON-LD Product structures for SEO
  injectProductSchema(products) {
    // Remove any existing dynamic product schema
    const existing = document.getElementById('dynamic-product-schema');
    if (existing) {
      existing.remove();
    }

    if (!products || products.length === 0) return;

    const itemListElement = products.map((p, index) => {
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "image": window.location.origin + '/' + p.image,
          "description": `${p.name} par ${p.brand}. Appareil électroménager disponible à Dakar chez Fall Business. Garantie constructeur incluse.`,
          "brand": {
            "@type": "Brand",
            "name": p.brand
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "XOF",
            "price": p.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31",
            "url": window.location.href
          }
        }
      };
    });

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": document.title,
      "numberOfItems": products.length,
      "itemListElement": itemListElement
    };

    const script = document.createElement('script');
    script.id = 'dynamic-product-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
  }
}

// Instantiate globally
const app = new ECommerceApp();
