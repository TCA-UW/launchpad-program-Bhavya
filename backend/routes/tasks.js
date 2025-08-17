const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) {
      console.error('Supabase error:', error); // Add this line
      throw error;
    }
    res.json(data);
  } catch (error) {
    console.error('Route error:', error); // Add this line
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;