const chai  = require('chai');
const expect = chai.expect;
const getCustomerClass = require('../handlers/getCustomerData');
 
describe('getRecord', () => {
 
    it('getRecord with valid response', (done) => {
        const event = {
            body: '',
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '',
            pathParameters: {"customerId":"123"},
            queryStringParameters: {},
            stageVariables: {},
            requestContext: {},
            resource: '' };

        // const actualResponseBody = {
        //     "address" : "addressX",
        //     "email":"email.gmail.com",
        //     "firstName":"afia",
        //     "lastName":"farjana",
        //     "customerId":"123"
        // }
        console.log("before unit test function");
        
       getCustomerClass.getCustomer(event)
        .then( res =>{
            console.log(res);
            expect(res.statusCode).to.equal(200);
            
        })
        .catch(err => console.log("Error is: "+err))
        .finally(done)
        ;
      
     });
 
});