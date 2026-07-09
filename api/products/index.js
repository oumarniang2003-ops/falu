import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { category } = req.query;

  try {
    const sql = neon(process.env.DATABASE_URL);

    // Check if the products table is empty. If so, seed it!
    const countResult = await sql`SELECT COUNT(*)::integer FROM products`;
    const count = countResult[0].count;

    if (count === 0) {
      console.log("Seeding products table from products.json...");
      const jsonPath = path.join(process.cwd(), 'products.json');
      const productsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

      // Seed products into the database
      for (const p of productsData) {
        await sql`
          INSERT INTO products (name, category, brand, price, stock, description, image_url)
          VALUES (${p.name}, ${p.category}, ${p.brand}, ${p.price}, 10, 'Appareil électroménager de qualité supérieure chez Fall Business.', ${p.image})
        `;
      }
      console.log("Seeding completed successfully.");
    }

    // Query products
    let products;
    if (category) {
      products = await sql`
        SELECT id, name, category, brand, price, stock, description, image_url AS image
        FROM products
        WHERE category = ${category}
        ORDER BY id ASC
      `;
    } else {
      products = await sql`
        SELECT id, name, category, brand, price, stock, description, image_url AS image
        FROM products
        ORDER BY id ASC
      `;
    }

    // Map database properties to match PRODUCTS javascript structure
    const categoryDisplayMap = {
      "refrigerators": "Réfrigérateurs & Congélateurs",
      "washing_machines": "Machines à Laver & Cuisson",
      "tvs": "Télévisions & Son",
      "climatiseurs": "Climatiseurs & Splits"
    };

    const formattedProducts = products.map(p => ({
      id: String(p.id),
      name: p.name,
      price: p.price,
      brand: p.brand,
      image: p.image,
      category: p.category,
      categoryDisplay: categoryDisplayMap[p.category] || p.category,
      rating: 5,
      description: p.description || "Appareil électroménager de qualité supérieure chez Fall Business.",
      badge: p.price > 300000 ? "PREMIUM" : (p.price < 50000 ? "PRIX BAS" : "PROMO")
    }));

    return res.status(200).json(formattedProducts);
  } catch (error) {
    console.error("Database query error:", error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
