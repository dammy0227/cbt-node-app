const express = require('express');
const { getQuestions, submitAnswers, getAnswers } = require('../controllers/examController');

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit', submitAnswers);
router.get('/answers', getAnswers);

module.exports = router;
