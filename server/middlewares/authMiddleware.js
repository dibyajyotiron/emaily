module.exports = (req, res, next) => {
  if (req.user) return next();
  return res.status(401).json({
    error: true,
    message: "You're not authorized to access this!",
  });
};
