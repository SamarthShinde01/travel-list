import asynHandler from "express-async-handler";

//POST /api/v1/user/signup PUBLIC
const userSignupController = asynHandler(async (req, res) => {
	return res.send("signup");
});

//POST /api/v1/user/signin PUBLIC
const userSigninController = asynHandler(async (req, res) => {
	return res.send("signin");
});

//POST /api/v1/user/logout PUBLIC
const userLogoutController = asynHandler(async (req, res) => {
	return res.send("logout");
});

//GET /api/v1/user/profile PRIVATE
const userGetController = asynHandler(async (req, res) => {
	return res.send("getuser");
});

//PUT /api/v1/user/profile PRIVATE
const userUpdateController = asynHandler(async (req, res) => {
	return res.send("update user");
});

export {
	userSignupController,
	userSigninController,
	userGetController,
	userUpdateController,
	userLogoutController,
};
