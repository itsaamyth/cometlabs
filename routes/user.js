const express = require('express')
var router = express.Router()
const {signupAdmin,signupUser,login,isAdmin,isLoggedIn} =  require('../controllers/auth')

router.post('/signupAdmin',signupAdmin)
router.post('/signupUser',signupUser)
router.post('/login',login)









module.exports = router
