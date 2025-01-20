const stringSimilarity = require('string-similarity');

exports.gradeExam = (questions, userAnswers) => {
    let score = 0;
    const feedback = questions.map((q, index) => {
        const userAnswer = userAnswers[index] || "";
        const similarity = stringSimilarity.compareTwoStrings(q.answer.toLowerCase(), userAnswer.toLowerCase());
        const questionScore = similarity > 0.8 ? 20 : similarity > 0.4 ? 10 : 0;
        score += questionScore;

        return {
            questionId: q.id,
            similarity: Math.round(similarity * 100),
            score: questionScore,
            correctAnswer: q.answer,
            userAnswer
        };
    });

    return { score, feedback };
};
