require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.post("/chat", async (req, res) => {
  try {
    const { message, file } = req.body;
    const chatHistory = [
      {
        role: "user",
        parts: [{ text: message }, ...(file ? [{ inline_data: file }] : [])],
      },
    ];

    const geminiResponse = await axios.post(
      API_URL,
      { contents: chatHistory },
      { headers: { "Content-Type": "application/json" } }
    );

    res.json(geminiResponse.data);
  } catch (error) {
    console.log(
      "Error during fetching Api response: Message: ",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({
      error: error.response
        ? error.response.data
        : error.message || "Internal Server Error",
    });
  }
});

//  server listening
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Server running...`);
});
