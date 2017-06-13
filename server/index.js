// server/index.js
'use strict';

const app = require('./app');
const config = require('./config');

const PORT = process.env.PORT || config.get('PORT');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});