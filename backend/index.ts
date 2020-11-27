import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/blogRoutes";

const app = express();
const PORT = 3000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://user123:Googol%2123@cluster0.j6dq3.mongodb.net/blog?retryWrites=true&w=majority", {
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
