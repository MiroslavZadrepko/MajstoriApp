const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const conectDB = require('./config/db')
const port = process.env.PORT || 5000;

conectDB();

const app = express();

//dev part just to check what the hell am i doin
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(errorHandler);

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/tmp', require('./routes/tmpRoutes'));

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})
