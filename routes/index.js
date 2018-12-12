const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const { celebrate, Joi } = require("celebrate");

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

router.post("/register", AuthenticationController.create);

module.exports = router;