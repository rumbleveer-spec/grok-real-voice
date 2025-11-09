require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { OpenAI } = require('openai');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = gemini.getGenerativeModel({ model: "gemini-1.5-pro" });

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: "https://api.perplexity.ai"
});

let memory = [];

app.post('/speak', async (req, res) => {
  const { text, model = "perplexity" } = req.body;
  memory.push({ role: "user", content: `[MIC] ${text}` });

  try {
    let reply;
    if (model === "perplexity") {
      const response = await perplexity.chat.completions.create({
        model: "llama-3.1-sonar-small-128k-online",
        messages: memory.slice(-10)
      });
      reply = response.choices[0].message.content;
    } else {
      const result = await geminiModel.generateContent({
        contents: memory.slice(-10)
      });
      reply = result.response.text();
    }

    memory.push({ role: "assistant", content: reply });
    res.json({ reply });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log("PERPLEXITY VOICE AGENT LIVE: http://localhost:3000");
});