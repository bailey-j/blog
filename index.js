import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from './routes/blogRoutes.js'
import path from 'path'
import mongoURI from "./config/keys.js"

const app = express();
const PORT = process.env.PORT || 3000;

//configs
const db = mongoURI.mongoURI;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//CORS
app.use(cors());

//body-parser config
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//routes
routes(app);
// const path = require('path'); var __dirname = path.resolve();

//Serve static assets if in production
if(process.env.NODE_ENV == 'production'){
   //static folder
   app.use(express.static('client/dist'));
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(process.cwd(), "client", "dist", "index.html"))
   })
}

app.listen(PORT, () => console.log(`We're running port ${PORT}`));
