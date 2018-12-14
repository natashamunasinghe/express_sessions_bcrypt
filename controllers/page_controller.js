function index (req, res) {
    //req.session is an object and we are adding a new property called views
    //initially req.session.views is initially null
    //if it doesn't exist we are setting it at 1
    //.views is something we make up (can be any name)
    req.session.views = req.session.views ? req.session.views + 1 : 1;
    res.json(req.session.views);
    //this renders "welcome" on index page
    // res.send("welcome");
}

function dashboard (req, res) {
    res.json(req.session.user);

}

module.exports = {
    index,
    dashboard
}