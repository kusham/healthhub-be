const PackageModel = require("../models/PackageModel");
const UserModel = require("../models/UserModel");

module.exports.packageCreation = async function (packageData, callback) {
  await PackageModel(packageData)
    .save()
    .then((package) => {
      callback(null, package);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.getPackages = async function (callback) {
  await PackageModel.find()
    .then((packages) => {
      callback(null, packages);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.getPackageById = async function (id, callback) {
  await PackageModel.findById(id)
    .then((package) => {
      callback(null, package);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.selectPackage = async function (selectedData, callback) {
  const user = await UserModel.findOne({ _id: selectedData.userId });
  if (user) {
    await UserModel.findByIdAndUpdate(
      selectedData.userId,
      { $set: { package: selectedData.packageId } },
      {
        new: true,
      } 
    )
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err);
      });
  }
};
