import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const sql = neon(process.env.DATABASE_URL);

  if (req.method === 'POST') {
    const {
      customer_name,
      customer_phone,
      customer_address,
      product_id,
      quantity,
      payment_method
    } = req.body;

    if (!customer_name || !customer_phone || !customer_address || !product_id || !quantity || !payment_method) {
      return res.status(400).json({ error: 'Missing required order fields' });
    }

    try {
      // Validate that product exists
      const productCheck = await sql`SELECT id FROM products WHERE id = ${parseInt(product_id)}`;
      if (productCheck.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Insert order
      const result = await sql`
        INSERT INTO orders (customer_name, customer_phone, customer_address, product_id, quantity, payment_method, status)
        VALUES (${customer_name}, ${customer_phone}, ${customer_address}, ${parseInt(product_id)}, ${parseInt(quantity)}, ${payment_method}, 'en_attente')
        RETURNING id, customer_name, customer_phone, customer_address, product_id, quantity, payment_method, status, created_at
      `;

      return res.status(201).json(result[0]);
    } catch (error) {
      console.error("Order creation error:", error);
      return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }

  if (req.method === 'GET') {
    // Admin verification
    const authHeader = req.headers.authorization;
    const adminToken = process.env.ADMIN_TOKEN || 'admin_secret';

    let isAuthorized = false;
    if (authHeader) {
      const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
      if (token === adminToken) {
        isAuthorized = true;
      }
    }

    if (!isAuthorized) {
      return res.status(401).json({ error: 'Unauthorized. Admin usage only.' });
    }

    try {
      const orders = await sql`
        SELECT o.id, o.customer_name, o.customer_phone, o.customer_address, 
               o.product_id, p.name AS product_name, p.brand AS product_brand,
               o.quantity, o.payment_method, o.status, o.created_at
        FROM orders o
        LEFT JOIN products p ON o.product_id = p.id
        ORDER BY o.created_at DESC
      `;
      return res.status(200).json(orders);
    } catch (error) {
      console.error("Orders query error:", error);
      return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
