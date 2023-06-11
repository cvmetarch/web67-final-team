import express from "express";

const router = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";
//controller
// import { users } from "../controllers/auth.js";
import { register, login, secret } from "../controllers/auth.js";

// router.get("/users", users);
router.post("/register", register);
router.post("/login", login);
// testing
router.get("/secret", requireSignin, isAdmin, secret);

export default router;