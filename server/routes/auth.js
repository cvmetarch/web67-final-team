import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
  res.json({data: "Cyber Chanh Vo",});
});

export default router;