'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"});
const documentClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10'});

function response(statusCode, response){
  return{
    statusCode: statusCode,
    body: JSON.stringify(response)
  }
}
exports.getCustomer = (event,callback) => {

   const params = {
       TableName: "Customer",
       Key: {
           customerId:  event.pathParameters.customerId
       }
   }

    return documentClient.get(params).promise()
   .then((res) => {
    if(res.Item) {
      console.log("hit the inside .then function. ");
      return response(200, res.Item);
    }
    else {
      console.log("inside else");
     return response(404, { error: 'Customer not found' });
    }
   })
   .catch((err) =>{ return response(err.statusCode, err) }); 

  // return documentClient.get(params).promise()
  //  .then((res) => {
  //   if(res.Item) {
  //     console.log("hit the inside .then function. ");
  //     callback(null, response(200, res.Item));
  //   }
  //   else {
  //     console.log("inside else");
  //     callback(null, response(404, { error: 'Customer not found' }));
  //   }
  //  })
  //  .catch((err) => callback(null, response(err.statusCode, err)));

   
}