const express = require('express');
const cors = require('cors');
const axios = require('axios');
const qs = require('qs'); // библиотека для сериализации

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {
  try {
    const formData = qs.stringify(req.body);

    const response = await axios.post('https://api.ifreeicloud.co.uk', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
