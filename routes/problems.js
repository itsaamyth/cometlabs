const express = require('express')
var router = express.Router()
const {addProblemByApi,addProblemBySelf,editProblem, deleteProblem,showProblems} =  require('../controllers/Problems')
const {isAdmin,isLoggedIn} =  require('../controllers/auth')


router.get('/showProblems',isLoggedIn,isAdmin,showProblems)
router.post('/addProblemByApi/:problemId',isLoggedIn,isAdmin,addProblemByApi)
router.post('/addProblemBySelf',isLoggedIn,isAdmin,addProblemBySelf)
router.put('/editProblem/:problemId',isLoggedIn,isAdmin,editProblem)
router.delete('/deleteProblem/:problemId',isLoggedIn,isAdmin,deleteProblem)









module.exports = router
