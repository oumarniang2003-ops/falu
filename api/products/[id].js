import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing product ID' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      SELECT id, name, category, brand, price, stock, description, image_url AS image
      FROM products
      WHERE id = ${parseInt(id)}
    `;

    if (result.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const p = result[0];
    const categoryDisplayMap = {
      "refrigerators": "Réfrigérateurs & Congélateurs",
      "washing_machines": "Machines à Laver & Cuisson",
      "tvs": "Télévisions & Son",
      "climatiseurs": "Climatiseurs & Splits"
    };

    const formattedProduct = {
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
    };

    return res.status(200).json(formattedProduct);
  } catch (error) {
    console.error("Database query error:", error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
