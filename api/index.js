const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
  try{
    res.json({
      status: 200,
      message: 'GOOOOODDDDD.....'
    });
  } catch(error) {
    console.log(error);
    return res.status(500).send('Server ERRORRR')
  }
});

module.exports = router;