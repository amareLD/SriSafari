import express from 'express';
import axios from 'axios';
// const axios = require('axios');
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/places', async (req, res) => {
  try {
    const { query, radius, lat, lng } = req.query;
    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    const baseUrl =
      'https://maps.googleapis.com/maps/api/place/textsearch/json';
    // const imageUrl =
    //   'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400';

    const response = await axios.get(baseUrl, {
      params: {
        query,
        //category: category,
        radius,
        location: `${lat},${lng}`,
        key: apiKey,
      },
    });

    res.json(response.data.results);

    // const responseImg = await axios.get(imageUrl, {
    //   params: {
    //     photoreference:response.data.results,

    //     key: apiKey,
    //   },
    // });
    // res.json(responseImg.data);
  } catch (error) {
    console.error('Error fetching places:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// module.exports = router;
export default router;
