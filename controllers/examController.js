const questions = require('../data/question');
const { gradeExam } = require('../services/gradingServices');

// Get all questions
exports.getQuestions = (req, res) => {
    res.status(200).json(questions.map(q => ({ id: q.id, question: q.question })));
};

// Submit answers and grade
exports.submitAnswers = (req, res) => {
    const userAnswers = req.body.answers; // Array of answers
    if (!Array.isArray(userAnswers)) {
        return res.status(400).json({ error: "Invalid answers format" });
    }

    const { score, feedback } = gradeExam(questions, userAnswers);

    res.status(200).json({
        score,
        feedback
    });
};

// Get correct answers for comparison
exports.getAnswers = (req, res) => {
    res.status(200).json(questions.map(q => ({ id: q.id, answer: q.answer })));
};
