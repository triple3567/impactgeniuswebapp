"use-stict";
import express from "express";
import config from "./config.js";
import bodyParser from "body-parser";
import orderRouter from "./routes/orderRouter.js";
import connectToDatabase from "./connectMongodb.js";
import cors from "cors";

//make the express app
const app = express();

app.use(cors());

//body parsing middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// router middleware
app.use("/api", orderRouter);

//allow accessing information from foreign domains
//might need to use this so we can make requests
//app.use(cors()) would have to import cors from "cors";

//connect to MongoDB Atlas
const db = connectToDatabase();

db.on("error", (error) => {
  console.error("Failed to connect to MongoDB Atlas");
});
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");

  const PORT = config.port || process.env.PORT;

  app.listen(PORT, () => {
    console.log(`express app is now listening on port ${config.port}`);
  });
});
