const app = require('./app');
require('dotenv').config();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
})