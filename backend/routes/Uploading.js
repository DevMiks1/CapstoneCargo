const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const authMiddleware = require("../middleware/authmiddleware");
const app = express();

const imageDirectory = 'uploads';
app.use('/uploads', express.static(imageDirectory));



const CreateUploading= require("../services/uploading/Create");
const RetrieveAllUploading = require("../services/uploading/RetrieveAll");
const DeleteUploading = require("../services/uploading/Delete");
const UpdateUploading = require("../services/uploading/Update");
const RetrieveUploading = require("../services/uploading/Retrieve");

let newName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
    newName = uniqueSuffix.toString() + file.originalname;
  },
});


const upload = multer({ storage: storage });
router.use(authMiddleware);
// Create a new image
router.post('/create', upload.single("image"), async (req, res) => {
  // Extract image data from request
  const { filename, originalname, mimetype, size } = req.body;
  const results = await CreateUploading (
    filename, originalname, mimetype, size,
  )

  if(results){
    res.status(200).send({
      status: results,
      message: "Image uploaded and saved!",
      data: {
        name: newName,
        filename:newName,
        originalname:req.body.originalname,
        mimetype:req.body.mimetype,
        size:req.body.size

      }
    })
  } else {
    res.status(500).send({
      status: results,
      message: "Failed to upload the image",
    })
  }
});

// Get all images
router.get("/retrieveAll",upload.single("image"), async (req, res) => {
  const results = await RetrieveAllUploading();
  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved",
    });
  }
});
  
router.get("/retrieve/:id",upload.single("image"), async (req,res) => {
  const _id = req.params.id;
  
  const results = await RetrieveUploading(_id);
  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved",
    });
  }
})


router.put("/update/:id", upload.single("image"), async (req, res) => {
  const _id = req.params.id;
  const { set } = req.body;

  // Get the uploaded file information
  const { filename, originalname, mimetype, size } = req.file;

  // Prepare the updated data for the image
  const updatedData = {
    filename,
    originalname,
    mimetype,
    size,
    ...set
  };

  const results = await UpdateUploading(_id, updatedData);
  if (results.success) {
    res.status(200).send({
      status: results.success,
      message: results.message,
      newData: results.newData,
    });
  } else {
    res.status(500).send({
      status: results.success,
      message: results.message,
    });
  }
});




router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;
  const filePath = path.join(imageDirectory, _id);

  const results = await DeleteUploading(_id);
  if (results.success) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file", err);
        res.status(500).send({
          status: false,
          message: "Error deleting file",
        });
      } else {
        res.status(200).send({
          status: true,
          message: "File deleted successfully",
        });
      }
    });
  } else {
    res.status(500).send({
      status: false,
      message: results.message,
    });
  }
});



  module.exports = router;