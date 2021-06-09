import 'reflect-metadata';
import express from 'express';

const app = express();
const PORT = 3333 || process.env.PORT; 

import './database';
import {router} from './routes';

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router); 
  
app.listen(PORT, () => console.log(`Server running ${PORT}`));