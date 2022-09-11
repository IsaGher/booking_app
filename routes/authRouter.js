const {Router} = require("express");
const AuthController = require("../controllers/authController");

const router = Router();

router.get("/auth/login", AuthController.getLoginView);
router.get("/auth/signup", AuthController.getSignUpView);

router.post("/api/auth/signup",AuthController.signup);
router.post("/api/auth/login", AuthController.login);

module.exports = router;