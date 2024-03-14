const express = require('express')
const dotenv = require('dotenv')
const urlRouter = require('./routes/urls')
dotenv.config({ path: './config/.env' });
const mongoose = require('mongoose')
const app = express();

//connection with database
const dbUrl = process.env.MONGO_URI;
mongoose.connect(dbUrl,
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // }
  ) 
  .then( ()=>{
      console.log("Database connection successful");
  })
  .catch((err) =>{
      console.log("DB Connection Failed");
      console.log(err)
  })


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router call
app.use('/api', urlRouter);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
