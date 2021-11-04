require('dotenv').config();

global.fetch = (...args) =>
    import('cross-fetch').then(({ default: fetch }) => fetch(...args));
