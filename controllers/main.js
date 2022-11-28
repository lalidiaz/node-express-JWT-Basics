const customApiError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new customApiError("Please provide email and password.", 400);
  }

  res.send("Fake login/register/Signup");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello Laura`,
    secret: `Here is your authorized data, your lucky number is: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
