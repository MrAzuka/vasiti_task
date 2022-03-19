const {Router} = require("express")
const router = Router()
const {signIn} = require("../controllers/auth/signin.contoller")
const {signUp} = require("../controllers/auth/signup.contoller")

// ROUTE    /api/v1/login
router.post('/login', signIn)

// ROUTE    /api/v1/register
router.post('/register', signUp)


module.exports = router