const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const { celebrate, Joi } = require("celebrate");
const{ authorize, authDirect } = require("./../middleware/authentication_middleware");

//these 2 .use methods make this authRedirect avail to all routes for /register (e.g. /register/2) and /login
router.use("/register", authDirect);
router.use("/login", authDirect);

router.get("/", PageController.index);

//the .loginForm, loginVerify etc made up names

router.get("/login", AuthenticationController.loginForm);

router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required(),
    }
}), AuthenticationController.loginVerify);

router.get("/register", AuthenticationController.make);

router.post("/register", celebrate ({
        body: {
            email: Joi.string().required(),
            password: Joi.string().required(),
        }
    }), AuthenticationController.create);


router.get("/logout", AuthenticationController.logout);

router.get("/dashboard", authorize, PageController.dashboard);

module.exports = router;