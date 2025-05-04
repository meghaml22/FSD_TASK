const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/members', upload.single('image'), async (req, res) => {
  const { name, role, email } = req.body;
  const newMember = new Member({ name, role, email, image: req.file.filename });
  await newMember.save();
  res.json(newMember);
});

router.get('/members', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.get('/members/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
