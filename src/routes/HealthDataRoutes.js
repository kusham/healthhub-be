const express = require("express");
const { getHealthDataByUserId, insertHeightData, insertWeightData, insertEcgData, insertBloodPressureData, insertGlucoseLevelData, insertCholesterolData } = require("../controllers/HealthController");

const router = express.Router();

router.get("/data/:userId", getHealthDataByUserId);

router.put("/data/height/:userId", insertHeightData);
router.put("/data/weight/:userId", insertWeightData);
router.put("/data/ecg/:userId", insertEcgData);
router.put("/data/blood-pressure/:userId", insertBloodPressureData);
router.put("/data/glucose/:userId", insertGlucoseLevelData);
router.put("/data/cholesterol/:userId", insertCholesterolData);


module.exports = router;
