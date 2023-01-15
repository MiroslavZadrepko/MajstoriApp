const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})
