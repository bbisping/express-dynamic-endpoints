const express = require('express');

const app = express();
const PORT = process.env.PORT = 8080;

app.use( express.static(__dirname + '/dist/mockdata-frontend' ) );

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});
