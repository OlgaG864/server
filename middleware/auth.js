const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/helpers");
const User = require("../models/users");
const config = require("../config/dev");

exports.isAuth = async (req, res, next) => {
  const token = req.headers?.authorization;

  const jwtToken = token.split("Bearer ")[1];

  if (!jwtToken) return sendError(res, "Invalid token!");
  const decode = jwt.verify(jwtToken, config.JWT_SECRET);
  const { userId } = decode;

  const user = await User.findById(userId);
  if (!user) return sendError(res, "unauthorized access!");

  req.user = user;

  next();
};

exports.isAdmin = async (req, res, next) => {
  const { user } = req;
  if (user.role !== "admin") return sendError(res, "unauthorized access!");

  next();
};
