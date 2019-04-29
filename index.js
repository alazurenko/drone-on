const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static('./app'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))