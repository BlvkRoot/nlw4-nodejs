import 'reflect-metadata';
import express from 'express';

const app = express();
const PORT = 3333 || process.env.PORT; 

import './database';

app.get('/', (req, res) => {
  res.json({message: "cool"});
})
app.listen(PORT, () => console.log(`Server running ${PORT}`));