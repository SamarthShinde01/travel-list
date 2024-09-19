import express from "express";
import {
	userGetController,
	userLogoutController,
	userSigninController,
	userSignupController,
	userUpdateController,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);
router.post("/logout", userLogoutController);
router.get("/profile", userGetController);
router.put("/profile", userUpdateController);

export default router;
