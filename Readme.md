# API Routes are :
- http://localhost:8500/api/signupAdmin
- http://localhost:8500/api/signupUser
- http://localhost:8500/api/login

    <h2>Welcome to API</h2>
    <h3>The Dedicated Routes are :</h3>

    <h3>Note: Please note the all the routes are protected so you have to first login then get the token from the response and pass that token in Authorisation as 'Bearer [token]' in POSTMAN</h3>

    <h1>Auth Routes -</h1>
    <h3><a href="/api/signupAdmin">POST-/api/signupAdmin</a> : Admin Signup</h3>
    <h3><a href="/api/signupUser">POST-/api/signupUser</a> : User Signup</h3>
    <h3><a href="/api/login">POST-/api/login</a> : User Login</h3>  

    <h1>Submit Problem Routes -</h1>
    <h3><a href="/api/submitProblem">POST-/api/submitProblem</a> : Submits a Code to the API</h3>
    <h3><a href="/checkSubmission/:submissionId">POST-/api/checkSubmission/submissionId</a> : Shows the status of Submitted problem ,  'submissionId' is the Id you get in response when you submit a problem</h3>


    <h1>Adding , Editing & Deleting Problem Routes -</h1>

    <h3>Note: Please note the all these routes below are protected & only accessible by an Admin account so please signup by 
    <a href="/api/signupAdmin">POST-/api/auth/signup</a> route only For Admin account</h3>

    <h3><a href="/api/showProblems">GET-/api/showProblems</a> : Getting List of Problems from DB. This route is not protected and can be accessed by anyone</h3>
    <h3><a href="/addProblemByApi/:problemId">POST-/addProblemByApi/:problemId</a> : For Adding a new Problem in the db with the help of sphere API. You just have to pass the problemId of the problem from sphere API website </h3>
    <h3><a href="/api/addProblemBySelf">POST-/api/addProblemBySelf</a> : If you want to add a your own problem in the db. for refrence please check screenshot</h3>
    <h3><a href="/api/editProblem/:problemId">POST-/api/addProblemBySelf</a> : For Editing any Problem you have the pass the problemId in the url along with new changes</h3>
    <h3><a href="/api/deleteProblem/:problemId">POST-/api/addProblemBySelf</a> : For Deleting any Problem you have the pass the problemId</h3>


# screenshots are :
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (268).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (269).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (271).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (272).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (273).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (274).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (275).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (276).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (277).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (278).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (279).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (280).png" />
<img alt="Github" src="https://github.com/itsaamyth/cometlabs/blob/master/screenshots/Screenshot (281).png" />





