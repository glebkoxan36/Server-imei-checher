const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Простой ответ на GET /
app.get('/', (req, res) => {
  res.send('Proxy server is running');
});

app.post('/proxy', async (req, res) => {
  try {
    const response = await axios.post('https://api.ifreeicloud.co.uk', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
