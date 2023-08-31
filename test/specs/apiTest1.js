const axios = require('axios');
const { expect } = require('chai');

describe('API Test on oz.by', () => {
    let response;

    before(async () => {
        response = await axios({
            method: 'get',
            url: 'https://oz.by',
      });
    });

    it('GET request should be 200', async () => {
        expect(response.status).equal(200);
    });
});