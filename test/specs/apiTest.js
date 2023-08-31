const axios = require('axios');
const validator = require('jsonschema');
const { expect } = require('chai');
const schemaInfo = require('../apiTestSchema/api.schema.json');


describe('API Test on https://oz.by/checkout/google_data.php', () => {
    let response;
    before(async () => {
      response = await axios({
        method: 'get',
        url: 'https://oz.by/checkout/google_data.php',
        params: {
            "name": "Умней-ка. Числа и фигуры. 4-5 лет",
            "id": "10707322",
            "price": 12.56,
            "brand": "Аверсэв",
            "category": "Книги/Детские книги/Развивающие книги/Подготовка к школе/Математика, счет",
            "quantity": "4"
        },
      });
    });

    it('GET request should be 200', async () => {
        expect(response.status).equal(200);
      });

    it('GET should be valid json schema', async () => {
        const validationResult = await validator.validate(response.data, schemaInfo);
        expect(validationResult.valid).equal(true);
      });
    
});