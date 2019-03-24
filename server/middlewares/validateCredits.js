module.exports = (req, res, next) => {
  if (req.user.credits >= 1) return next();
  return res.status(403).json({
    error: true,
    message: 'You do not have enough credits!',
  });
};
