var request = require("request");

// define access parameters
var accessToken = "6f8fdc5d7d8f16e3226c12458c4c83f8";
var endpoint = "f59aafee.compilers.sphere-engine.com";

// define request parameters
var submissionData = {
  compilerId: 11,
  source: "<source_code>",
};

exports.postSubmission = (req, res) => {
  // send request
  request(
    {
      url:
        "https://" +
        endpoint +
        "/api/v4/submissions?access_token=" +
        accessToken,
      method: "POST",
      form: submissionData,
    },
    function (error, response, body) {
      if (error) {
        console.log("Connection problem");
        return response.status(400).json({
          err: "Connection Problem",
        });
      }

      // process response
      if (response) {
        if (response.statusCode === 201) {
          const success = JSON.parse(response.body);
          const submissionId = success.id;
          // send request
          request(
            {
              url:
                "https://" +endpoint +"/api/v4/submissions/" +submissionId+"?access_token=" +accessToken,
                method: "GET",
            },
            function (error, response, body) {
              if (error) {
                console.log("Connection problem");
              }
              // process response
              if (response) {
                if (response.statusCode === 200) {
                    const successResponse = JSON.parse(response.body);
                    const result = successResponse.id;
                    console.log(result);
                  // submission data in JSON
                    return res.json({
                      response:JSON.parse(response.body)
                    })
                } else {
                  if (response.statusCode === 401) {
                    console.log("Invalid access token");
                  }
                  if (response.statusCode === 403) {
                    console.log("Access denied");
                  }
                  if (response.statusCode === 404) {
                    console.log("Submision not found");
                  }
                }
              }
            }
          );
        } else {
          if (response.statusCode === 401) {
            console.log("Invalid access token");
            return response.status(401).json({
              err: "Connection Problem",
            });
          } else if (response.statusCode === 402) {
            console.log("Unable to create submission");
            return response.status(402).json({
              err: "Connection Problem",
            });
          } else if (response.statusCode === 400) {
            var body = JSON.parse(response.body);
            console.log(
              "Error code: " +
                body.error_code +
                ", details available in the message: " +
                body.message
            );
          }
        }
      }
    }
  );
};

exports.checkSubmission=(req,res)=>{
    var request = require('request');

    const submissionId = req.params.submissionId
// send request
request({
	url: 'https://' + endpoint + '/api/v4/submissions/' + submissionId + '?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
   
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            const successResponse = JSON.parse(response.body);
            const result = successResponse.id;
            console.log(result);
            // submission data in JSON
            return res.json({
              response:JSON.parse(response.body)
            })
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('Submision not found');
            }
        }
    }
});
}
