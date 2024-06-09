import express from "express";
import fs from "fs";
import { format } from "date-fns";
import path from "path";

// Declaration Space
const app = express();
const PORT = 4000;

// Miidleware Space
app.use(express.json());

// Endpoint to create a text file with current timestamp
app.get("/create", (req, res) => {
  const currentDateTime = format(new Date(), "yyyy-mm-dd-hh-mm-ss");
  const filePath = `TimeStamps/${currentDateTime}.txt`;
  fs.writeFileSync(filePath, currentDateTime, "utf-8");
  res.status(200).json({ message: "Text file created successfully", filePath });
});

// Simplified endpoint to retrieve all text files
app.get("/files", (req, res) => {
  const folderPath = "TimeStamps";
  fs.readdir(folderPath, (err, files) => {
    const textFiles = files.filter((file) => path.extname(file) === ".txt");
    res.status(200).json({ files: textFiles });
  });
});

// PORT Block
app.listen(PORT, () => {
  console.log(`App is running on Port = ${PORT} successfully`);
}); 
