import express from "express";
const imageUploadRouter = express.Router();
import cloudinary from "../config/cloudinary.config.js";
import upload from "../middleware/multer.middleware.js";

imageUploadRouter.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    const result = await cloudinary.uploader.upload_stream(
      { folder: "my_app_images" }, // optional folder
      (error, result) => {
        if (error) return res.status(500).json(error);
        res.json({ url: result.secure_url });
      }
    );

    // pipe buffer to cloudinary
    require("streamifier").createReadStream(file.buffer).pipe(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default imageUploadRouter;
