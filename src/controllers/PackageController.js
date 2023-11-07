const { packageCreation, getPackages, selectPackage } = require("../services/PackageService");


module.exports.packageCreation = (req, res) => {
    packageCreation(req.body, (err, package) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Package Creation is failed.",
          error: err.message,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Package Creation is successful.",
        });
      }
    });
  };

  module.exports.getPackages = (req, res) => {
    getPackages((err, packages) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Packages Not found.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Packages fetch successfully.",
          packages: packages
        });
      }
    });
  };

  
  module.exports.getPackageById = (req, res) => {
    getPackages(req.params.id, (err, package) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Package Not found.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Package fetch successfully.",
          package: package
        });
      }
    });
  };

  
  module.exports.selectPackage = (req, res) => {
    selectPackage(req.body , (err, user) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Package selection failed.",
          error: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Package selection successfully.",
        });
      }
    });
  };