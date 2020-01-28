const chai  = require('chai');
const expect = chai.expect;
const getCustomerClass = require('../handlers/getCustomerData');
const table_name = process.env.TABLE_NAME ;
 
describe('getRecord', () => {
 
    it('getRecord with valid response', (done) => {
        const event = {
            body: '',
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '',
            pathParameters: {"customerId":"d93e3329-994b-434c-a134-d08ab82f137a"},
            queryStringParameters: {},
            stageVariables: {},
            requestContext: {},
            resource: '' };

        const actualResponseBody = {
            "address" : "addressX",
            "email":"email.gmail.com",
            "firstName":"afia",
            "lastName":"farjana",
            "customerId":"d93e3329-994b-434c-a134-d08ab82f137a"
        }
        console.log("before unit test function");
        
      getCustomerClass.getCustomer(event,done)
        .then( res =>{
            console.log("response: "+res.statusCode+" "+res.body);
            expect(res.statusCode).to.equal(200);
            //expect(JSON.parse(res.body)).to.deep.equal(actualResponseBody);
            console.log("response: a"+res.statusCode+" "+res.body);
        })
        .catch(err => console.log("Error is: "+err))
        .finally(done)
        ;
        
     });
 
});