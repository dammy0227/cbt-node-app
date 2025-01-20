const express = require('express');
const cors = require('cors');
const examRoutes = require('./routes/examRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/exam', examRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
