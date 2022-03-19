const {Router} = require("express")
const router = Router()

const {viewReferral} = require("../controllers/user/userReferal.controller")

// ROUTE    /api/v1/veiw-referral
router.get('/veiw-referral', viewReferral)


module.exports = router