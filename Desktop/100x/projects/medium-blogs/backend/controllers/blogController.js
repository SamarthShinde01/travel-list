import asyncHandler from "express-async-handler";

//POST /api/v1/blog PRIVATE
const blogPostController = asyncHandler(async (req, res) => {
	return res.send("blog post");
});

//PUT /api/v1/blog/:id  PRIVATE
const blogUpdateController = asyncHandler(async (req, res) => {
	return res.send("blog update");
});

//GET /api/v1/blog/:id  PRIVATE
const blogGetController = asyncHandler(async (req, res) => {
	return res.send("blog get");
});

//GET /api/v1/blog/bulk  PRIVATE
const blogBulkController = asyncHandler(async (req, res) => {
	return res.send("bulk");
});

export {
	blogPostController,
	blogUpdateController,
	blogGetController,
	blogBulkController,
};
