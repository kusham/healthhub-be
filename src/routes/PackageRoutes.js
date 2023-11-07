const express = require("express");
const { packageCreation, getPackages, getPackageById, selectPackage } = require("../controllers/PackageController");

const router = express.Router();

router.post("/create", packageCreation);
router.get("/getall", getPackages);
router.get("/get/:id", getPackageById);
router.put("/select", selectPackage);


module.exports = router;
