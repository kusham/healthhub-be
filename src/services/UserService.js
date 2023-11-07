const HealthDataModel = require("../models/HealthDataModel");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

module.exports.userRegister = async function (userData, callback) {
  const user = await UserModel.findOne({ mobileNumber: userData.mobileNumber });
  if (!user) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    userData.password = hashedPassword;
    await UserModel(userData)
      .save()
      .then(async (user) => {
        await HealthDataModel({ userId: user._id }).save();
        callback(null, user);
      })
      .catch((err) => {
        callback(err);
      });
  } else {
    callback({ message: "User Already Exists" });
  }
};

module.exports.login = async function (credentials, callback) {
  const user = await UserModel.findOne({
    mobileNumber: credentials.mobileNumber,
  });
  if (user) {
    await bcrypt
      .compare(credentials.password, user.password)
      .then(() => {
        const { password, ...other } = user._doc;
        callback(null, other);
      })
      .catch((err) => {
        callback(err);
      });
  } else {
    callback({ message: "User Not Exists" });
  }
};

// module.exports.userProfileSetup = async function (userData, callback) {
//   const user = await UserModel.findOne({ mobileNumber: userData.mobileNumber });
//   if (user) {
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(userData.password, salt);
//     userData.password = hashedPassword;
//     await user
//       .findOneAndUpdate({ mobileNumber: userData.mobileNumber }, userData, {
//         new: true,
//       })
//       .then((user) => {
//         callback(null, user);
//       })
//       .catch((err) => {
//         callback(err);
//       });
//   } else {
//     callback("User Not exists");
//   }
// };
