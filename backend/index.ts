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

const upload = multer({storage: storage}).single("image");

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

app.post("/", (req, res) =>
  alert("sent")
);

app.listen(PORT, () => console.log(`We're running port ${PORT}`));
