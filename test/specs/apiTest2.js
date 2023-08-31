const axios = require('axios');
const validator = require('jsonschema');
const { expect } = require('chai');
const schemaInfo = require('../apiTestSchema/apiBasket.schema.json');

describe('API Test on oz.by/goods', () => {
    let response;

    before(async () => {
        response = await axios({
            method: 'get',
            url: 'https://oz.by/goods/ajax/html_box.php?idGoods=10707322&type=html',

      });
    });

    it('GET request should be 200', async () => {
        expect(response.status).equal(200);
    });

    it('GET should be valid json schema', async () => {
        console.log(response.data);
        const validationResult = await validator.validate(response.data, schemaInfo);
        expect(validationResult.valid).equal(true);
    });
});