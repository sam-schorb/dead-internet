import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // Use GPT-4 model
      messages: [{ role: 'user', content: prompt }],
    });

    res.status(200).json({ description: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Error generating response' });
  }
}
