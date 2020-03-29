let chai = require('chai'),
	chaihttp = require('chai-http');
chai.use(chaihttp);
let expect = chai.expect;
const helper = require('../helper/helper');

describe('API Tests', async () => {
	it('Get Users', async () => {
		const getUsersRes = await helper.getRequest('users');
		expect(getUsersRes.body.total).to.be.a('number');
		expect(getUsersRes.body.data).to.not.be.empty;
		expect(getUsersRes.body.data).to.be.an('array');
		expect(getUsersRes.body.data[0]).to.have.all.keys(
			'id',
			'email',
			'first_name',
			'last_name',
			'avatar'
		);
	});
	it('Create New User', async () => {
		const createUserPayload = { name: 'samuals', job: 'FS Developer' };
		const createUsersRes = await helper.postRequest('users', createUserPayload);
		console.log('createUsersRes ', createUsersRes.body);
		expect(createUsersRes.body.name).to.equal(createUserPayload.name);
		expect(createUsersRes.body.job).to.equal(createUserPayload.job);
		expect(createUsersRes.body.id).to.be.a('string');
	});
});
