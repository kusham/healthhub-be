const {
  getHealthData,
  insertHeight,
  insertWeight,
  insertEcg,
  insertGlucoseLevel,
  insertBloodPressure,
  insertCholesterol,
} = require("../services/HealthDataService");

module.exports.getHealthDataByUserId = (req, res) => {
  getHealthData(req.params.userId, (err, healthData) => {
    if (err) {
      return res.status(404).json({
        success: false,
        message: "health Data Not found.",
        error: err.message,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "health Data fetch successfully.",
        healthData: healthData,
      });
    }
  });
};

module.exports.insertHeightData = (req, res) => {
  insertHeight(req.body, req.params.userId, (err, data) => {
    if (err) {
      return res.status(404).json({
        success: false,
        message: "Height insertion failed.",
        error: err.message,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Height insertion successfully.",
      });
    }
  });
};

module.exports.insertWeightData = (req, res) => {
    insertWeight(req.body, req.params.userId, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Weight insertion failed.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Weight insertion successfully.",
        });
      }
    });
  };

  module.exports.insertBloodPressureData = (req, res) => {
    insertBloodPressure(req.body, req.params.userId, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Blood Pressure insertion failed.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Blood Pressure insertion successfully.",
        });
      }
    });
  };

  
  module.exports.insertGlucoseLevelData = (req, res) => {
    insertGlucoseLevel(req.body, req.params.userId, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "glucose Level insertion failed.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "glucose Level insertion successfully.",
        });
      }
    });
  };

  
  module.exports.insertEcgData = (req, res) => {
    insertEcg(req.body, req.params.userId, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "ECG insertion failed.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "ECG insertion successfully.",
        });
      }
    });
  };

  
  module.exports.insertCholesterolData = (req, res) => {
    insertCholesterol(req.body, req.params.userId, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Cholesterol insertion failed.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Cholesterol insertion successfully.",
        });
      }
    });
  };