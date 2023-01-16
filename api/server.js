const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const conectDB = require('./config/db')
const port = process.env.PORT || 5000;

conectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})
