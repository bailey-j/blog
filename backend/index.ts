import express from 'express';
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from 'cors';
import multer from 'multer';
import routes from "./routes/blogRoutes";

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function(req, file, cb) {
    if( file.mimetype == "image/png" || 
        file.mimetype == "image/jpg"
        ){
          cb(null, true)
    }else{
      console.log("only jpegs")
      cb(null, false)
    }
  },
  limits : {
    fileSize: 1024 * 1024 * 2
  }

}).single("image");

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog", {
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

app.get("/", (req, res) =>
  res.send(`Wow Our Server is Running on PORT: ${PORT}`)
);

app.listen(PORT, () => console.log(`We're running port ${PORT}`));
