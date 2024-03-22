import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
import rateLimit from "express-rate-limit";
dotenv.config();
connectDb();


const port = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://scissor-urlshortener-project-frontend-krco.onrender.com",
    credentials: true,
  })
);

app.use('/', express.static('dist'));
app.use("/api/", shortUrl, limiter);

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
