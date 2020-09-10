import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";

//Initialise app variable
const app = express();
//Define PORT
const PORT = 5000;
//use bodyParser to tell the application that json format will be  used throughout
app.use(bodyParser.json());

//Using Routes from other JS files
app.use("/users", usersRouter);

//listen to port defined below, server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
