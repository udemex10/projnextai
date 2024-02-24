import OpenAI from 'openai';

export default async function handler(req, res) {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OpenAI API key not configured, please set it in your .env.local file",
    });
  }

  const { question } = req.body;
  if (!question || question.trim().length === 0) {
    return res.status(400).json({
      error: "Please provide a valid question",
    });
  }

  const prompt = generateCadModelingPrompt(question);

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompt
      }],
    });

    console.log('OpenAI API Response:', JSON.stringify(completion, null, 2));
    console.log('Completion Choices:', completion.choices);

    if (completion.choices && completion.choices.length > 0) {
         const response = completion.choices[0].message.content;
         return res.status(200).json({ result: response });
       } else {
         throw new Error('No response from OpenAI.');
       }
     } catch (error) {
       console.error('Error with OpenAI API:', error);
       return res.status(500).json({ error: 'Error processing your request.' });
     }
}

function generateCadModelingPrompt(question) {
  return `I am an expert CAD modeller/engineer. Here is my response to your query:

    Question: ${question}
    Answer:`;
}

