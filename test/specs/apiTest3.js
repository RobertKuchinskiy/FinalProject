const axios = require('axios');
const validator = require('jsonschema');
const { expect } = require('chai');
const schemaInfoEmpty = require('../apiTestSchema/apiEmpty.schema.json');


describe('API Test on oz.by/checkout', () => {
    let response;
    let cookie;

    before(async () => {
        response = await axios({
            method: 'get',
            url: 'https://oz.by/checkout/google_data.php',
      });
    });

    it('GET request should be 200', async () => {
        expect(response.status).equal(200);
    });

    it('GET should be valid json schema', async () => {
        console.log(response.data);
        cookie = response.headers['set-cookie']
        const validationResult = await validator.validate(response.data, schemaInfoEmpty);
        expect(validationResult.valid).equal(true);
    });

});