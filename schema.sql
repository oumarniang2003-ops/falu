-- Fall Business Database Schema for Neon Postgres

-- Table: products
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- e.g., 'refrigerators', 'washing_machines', 'tvs', 'climatiseurs'
    brand VARCHAR(100) NOT NULL,    -- e.g., 'SAMSUNG', 'LG', 'ASTECH', 'ROCH'
    price INTEGER NOT NULL,          -- Price in FCFA
    stock INTEGER NOT NULL DEFAULT 10,
    description TEXT,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Table: orders
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    customer_address TEXT NOT NULL,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    payment_method VARCHAR(100) NOT NULL, -- e.g., 'Wave', 'Orange Money', 'espèces'
    status VARCHAR(50) NOT NULL DEFAULT 'en_attente', -- 'en_attente', 'confirmée', 'livrée', 'annulée'
    created_at TIMESTAMP DEFAULT NOW()
);
