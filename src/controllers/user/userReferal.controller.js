const User = require("../models/user.model");

exports.viewReferral = (req,res) => {
    const referral =  await User.findAll({where: {referedBy: req.user.referralID}})

    res.json("List of people you referred:",{username: referral.username})
}