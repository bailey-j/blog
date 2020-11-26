import express from "express";
import fileupload from "express-fileupload";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
// import multer from "multer";
import routes from "./routes/blogRoutes";

const app = express();
const PORT = 3000;

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, __dirname + "/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });

// export const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//       cb(null, true);
//     } else {
//       console.log("only jpegs");
//       cb(null, false);
//     }
//   },
//   // limits : {
//   //   fileSize: 1024 * 1024 * 2
//   // }
// }).single("imageUrl");

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//CORS
app.use(cors());

//express-fileupload
app.use(fileupload())

//body-parser config
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static('uploads'));

//routes
routes(app);

app.get("/", (req, res) =>
  res.send(`Wow Our Server is Running on PORT: ${PORT}`)
  // res.sendFile(__dirname + "/index.html")
);

app.post("/posts", async (req, res) =>{
    if(req.files){
    console.log(req)
    const file = req.files.imageUrl;
    const filename = file.name;

    file.mv((__dirname + "/uploads/" + filename), function(err) {
      if(err){
        res.send(err)
      }
      else{
        res.send({
          status: true,
          message: 'File is uploaded',
          data: filename
      })
      }
    });
    }
});

app.listen(PORT, () => console.log(`We're running port ${PORT}`));
