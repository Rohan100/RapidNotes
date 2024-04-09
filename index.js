import express from "express";
import multer from 'multer';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import firebaseConfig from "./firebase.config.js";
import { pdf } from 'pdf-to-img'
import Filerouter from "./routes/file.js";
import userRouter from "./routes/user.js";
import dataRouter from "./routes/data.js";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(express.urlencoded())
app.use('/file', Filerouter);
app.use('/user',userRouter);
app.use('/',dataRouter);

const port = process.env.PORT || 3000

app.listen(3000, () => {
  console.log("HEllo")
})