import express from "express";
import { getUsers, getUser, postUser, deleteUser, patchuser } from "../controllers/usersControllers.js";

//Create route for http://localhost:5000/users
const router = express.Router();

//Defining route paths for GET, POST, PATCH, PUT and DELETE requests

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", postUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchuser);

export default router;
