import express from "express";
import db from "../db/database.js";

const app = express();
const port = process.env.API_PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}.`));