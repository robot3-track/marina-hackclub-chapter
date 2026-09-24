let inMemoryStore: any[] = [];

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(inMemoryStore);
  }

  if (req.method === 'POST') {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (Array.isArray(data)) {
      inMemoryStore = data;
    }
    return res.status(200).json({ success: true, count: inMemoryStore.length });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
