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
module.exports.getCustomer = (event,context,callback) => {

   const params = {
       TableName: process.env.TABLE_NAME,
       Key: {
           customerId:  event.pathParameters.customerId
       }
   }

   return documentClient.get(params).promise()
   .then((res) => {
    if(res.Item) callback(null, response(200, res.Item));
    else callback(null, response(404, { error: 'Customer not found' }));
   })
   .catch((err) => callback(null, response(err.statusCode, err)));
   
}