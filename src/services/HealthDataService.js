const HealthDataModel = require("../models/HealthDataModel");

module.exports.getHealthData = async function (userId, callback) {
  await HealthDataModel.findOne({ userId: userId })
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.insertHeight = async function (inputData, userId, callback) {
  await HealthDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: { height: inputData.height } },
    {
      new: true,
    }
  )
    .then((data) => {
      console.log(data);
      callback(null, data);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports.insertWeight = async function (inputData, userId, callback) {
  await HealthDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: { weight: inputData.weight } },
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
};

module.exports.insertBloodPressure = async function (
  inputData,
  userId,
  callback
) {
  await HealthDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: { bloodPressure: inputData.bloodPressure } },
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
};

module.exports.insertGlucoseLevel = async function (
  inputData,
  userId,
  callback
) {
  await HealthDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: { glucoseLevel: inputData.glucoseLevel } },
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
};

module.exports.insertEcg = async function (inputData, userId, callback) {
  await HealthDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: { ecg: inputData.ecg } },
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
};

module.exports.insertCholesterol = async function (
  inputData,
  userId,
  callback
) {
  await HealthDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: { cholesterol: inputData.cholesterol } },
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
};
