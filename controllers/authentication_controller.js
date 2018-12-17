const UserModel = require("./../database/models/user_model");

//shows login form
function loginForm (req, res) {
    res.render("authentication/login");
}

//verifies login information
async function loginVerify (req, res) {
    // const { email } = req.body
    // const user = await UserModel.findOne({email});

    // if (!user) {
    //     return res.redirect("/login");
    // }

    // //we can use .verifyPassword because we are using Bcrypt
    // const valid = await user.verifyPassword(password)

    // if(!valid) {
    //     return res.redirect("/login");
    // }

    // req.session.user = user;
    // res.redirect("/dashboard");
}

//shows registration form
function make (req, res) {
    res.render("authentication/make");

}

//creates user in model
async function create (req, res) {
    //this enables us to check that what we added to 'Registration page' is actually being logged
    // res.json(req.body); 
    //this creates user
    const user = await UserModel.create(req.body);
    //this saves user inside our session
     req.session.user = user;
     res.redirect("/dashboard");

}

function show (req, res) {
    res.render("authentication/show");

}


function logout (req, res) {
    req.session.destroy(() => {
        res.redirect("/");
    });
}

module.exports =  {
    make,
    create,
    loginForm,
    loginVerify,
    logout
}