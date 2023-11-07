const { userRegister, login, userProfileSetup } = require("../services/UserService");

module.exports.registerUser = (req, res) => {
  userRegister(req.body, (err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Registration is failed.",
        error: err.message,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "User registration is successful.",
      });
    }
  });
};


module.exports.login = (req, res) => {
    login(req.body, (err, user) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "User Login failed.",
            error: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "User login successful.",
            user: user
          });
        }
      });
  };


//   module.exports.userProfileSetup = (req, res) => {
//     userProfileSetup(req.body, (err, user) => {
//       if (err) {
//         return res.status(400).json({
//           success: false,
//           message: "Profile setup is failed.",
//           error: err.message,
//         });
//       } else {
//         res.status(201).json({
//           success: true,
//           message: "Profile setup is successful.",
//         });
//       }
//     });
//   };