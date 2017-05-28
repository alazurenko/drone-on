const serve = require('serve');
const app = `${__dirname}/app`;
serve(app, { port: process.env.PORT || 3000 });
