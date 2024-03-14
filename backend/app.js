import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import router from './routes/urls.js';
dotenv.config({ path: './config/.env' });

const app = express();

connectDB();


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', router);

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
