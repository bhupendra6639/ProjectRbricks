const express = require('express');
const router = express.Router();
const FormData = require('../models/Formdata');

// POST - create new form entry
router.post('/', async (req, res) => {
  try {
    const data = new FormData(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - get all form entries
router.get('/', async (req, res) => {
  try {
    const allData = await FormData.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const entry = await FormData.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// PUT - update entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - delete entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await FormData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
