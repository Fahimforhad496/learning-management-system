const app = require('./app');
require('dotenv').config();

const connectWithDb = require('./mongo');

const PORT = 3000;

app.listen(PORT, () => {
    connectWithDb();
    console.log(`App listening on port ${PORT}`);
})