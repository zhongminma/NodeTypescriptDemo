//External Modules
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
dotenv.config();

// variables
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

// server activation
app.listen(process.env.PORT || 3400, ()=> {
  console.log(`Server starts on ${process.env.PORT || 3400}`);
});
