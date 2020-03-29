const chai = require('chai');
const URL = process.env.HOST;

exports.getRequest = async endPoint => {
	return await chai.request(URL).get(`/api/${endPoint}`);
};

exports.postRequest = async (endPoint, payload) => {
	return await chai
		.request(URL)
		.post(`/api/${endPoint}`)
		.send(payload);
};
