const express = require('express')
var router = express.Router()
const {postSubmission,checkSubmission} =  require('../controllers/submitProblem')
const {isLoggedIn} =  require('../controllers/auth')


router.post('/submitProblem',isLoggedIn,postSubmission)
router.post('/checkSubmission',isLoggedIn,checkSubmission)







module.exports = router
