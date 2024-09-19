import express from "express";
import {
	blogBulkController,
	blogGetController,
	blogPostController,
	blogUpdateController,
} from "../controllers/blogController.js";
const router = express.Router();

router.post("/", blogPostController);
router.put("/:id", blogUpdateController);
router.get("/bulk", blogBulkController);
router.get("/:id", blogGetController);

export default router;
