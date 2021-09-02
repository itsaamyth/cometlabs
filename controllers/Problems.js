const problems = require("../models/problems")
var request = require('request');

var accessToken = '72dd3b31f5b4232246429c66f9dc51e6';
var endpoint = 'f59aafee.problems.sphere-engine.com';


exports.addProblemByApi = (req,res)=>{
    var problemId = req.params.problemId
// send request
request({
    url: 'https://' + endpoint + '/api/v4/problems/'+problemId+'?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    // process response
    if (response) { 
        if (response.statusCode === 200) {
            const successResponse = JSON.parse(response.body)
            const result = successResponse;
            console.log(result);
            var addProblem = new problems(result)
            addProblem.save((err,data)=>{
                if(err){
                    return res.status(400).json({
                        err:"Not able to save Problem in the DB",
                    })
                }
                return res.json({
                    message:"Problem Added Successfully",
                    response:data
                })
            })

            // addProblem.insertMany(result).then((err,data)=>{
            //     return res.json({
            //         message:"Problem Added Successfully",
            //         response:data
            //     })
            // })
            // .catch((err)=>{
            //         return res.status(400).json({
            //             err:"Not able to save Problem in the DB"
            //         })
            // })

        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
        }
    }
});
}

exports.addProblemBySelf = (req,res)=>{
    var problem = req.body
    var addProblem = new problems(problem)
    addProblem.save((err,data)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save Problem in the DB",
            })
        }
        return res.json({
            message:"Problem Added Successfully",
            data
        })
    })
}

exports.editProblem = (req,res)=>{
    var problemId=req.params.problemId
    var name = req.body.name
    var code = req.body.code
    var body = req.body.body
    var testcases = req.body.testcases
    updateProblem =  problems.findOneAndUpdate({id:problemId},{name:name,code:code,body:body,testcases:testcases},{new:true})
    updateProblem.exec((err,data)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to update Problem in the DB",
            })
        }
        return res.json({
            message:"Problem Updated Successfully",
            data
        })
    })
}

exports.deleteProblem = (req,res)=>{
    var problemId=req.params.problemId
    updateProblem =  problems.findOneAndDelete({id:problemId})
    updateProblem.exec((err,data)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to Delete Problem in the DB",
            })
        }
        return res.json({
            message:"Problem Deleted Successfully",
            data
        })
    })
}

exports.showProblems=(req,res)=>{
    showProblems = problems.find()
    showProblems.exec((err,data)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to view Problem from the DB",
            })
        }
        return res.json({
            message:"List of All the Problems",
            data
        })  
    })

}