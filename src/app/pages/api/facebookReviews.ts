import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const PAGE_ID = 61568326664224;
  const ACCESS_TOKEN = process.env.FACEBOOK_TOKEN;
  const API_URL = `https://graph.facebook.com/v16.0/${PAGE_ID}/ratings?fields=review_text,recommendation_type,rating,created_time&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error fetching Facebook reviews: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
