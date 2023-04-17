//Redirects to login route in not signed in
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
};
  

module.exports = withAuth;