'use strict'
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

AWS.config.update({ region: "us-east-2"});
const documentClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10'});

function response(statusCode, response){
    return{
      statusCode: statusCode,
      body: JSON.stringify(response)
    }
}
module.exports.createCustomer = (event,context,callback) => {

  const reqBody = JSON.parse(event.body);

   const params = {
       TableName: process.env.TABLE_NAME,
       Item: {
           customerId:  uuid(),
           firstName: reqBody.firstName,
           lastName: reqBody.lastName,
           address: reqBody.address,
           email: reqBody.email     
           
       }
   }

   return documentClient.put(params).promise()
   .then(() => {
     callback(null, response(201,params.Item))
   })
   .catch(err => response(null, response(err.statusCode,err)));

}