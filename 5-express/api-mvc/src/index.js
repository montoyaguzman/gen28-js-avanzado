const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const { routerApi } = require('./routes/main.routes');

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor my-videos runging in ${port}`);
});

routerApi(app);