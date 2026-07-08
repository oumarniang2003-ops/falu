// NBS Electro E-Commerce App Global JavaScript

// Default Catalog Products
const PRODUCTS = [
  // --- TELEVISIONS & SON (Category: tvs) ---
  {
    id: "1",
    name: "Smart TV Google QLED 55\"",
    price: 190000,
    oldPrice: 220000,
    brand: "SAMSUNG",
    image: "images/WhatsApp Image 2026-07-04 at 17.37.01 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.16.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.20 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.20 (2).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.16.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.01 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.20 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.20 (2).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.17.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.18.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.20.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.00.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.01.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.02 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.02.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.05 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.10.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.15 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.15.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.36.57.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.36.59.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.05 (2).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.07.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.09 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.09.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.14.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.10 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.14 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.14 (2).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.16 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.19 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.36.56 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.04.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.05.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.36.51.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.36.56.jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.00 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.36.57 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.18 (1).jpeg",
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
    image: "images/WhatsApp Image 2026-07-04 at 17.37.19.jpeg",
    category: "washing_machines",
    categoryDisplay: "Petit Électroménager",
    rating: 4,
    badge: "MINUTERIE"
  }
];

window.PRODUCTS = PRODUCTS;


class ECommerceApp {
  constructor() {
    this.cartKey = 'nbs_electro_cart';
    this.cart = this.loadCart();
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateCartBadge();
    });
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
}

// Instantiate globally
const app = new ECommerceApp();
