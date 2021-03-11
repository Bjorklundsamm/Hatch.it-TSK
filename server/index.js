const express = require('express');
const app = express();

const PORT = 3000

app.use({urlencoded: true});
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Task service is listing ong ${PORT}`);
})

