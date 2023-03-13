/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = require('../../app');
const { User } = require('../../models/user');

const { DB_HOST_TEST, PORT } = process.env;

describe('response test', () => {
  let server;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    server.close();
    await mongoose.disconnect();
  });

  test('get response with token and user data to string', async () => {
    const hashPassword = await bcrypt.hash('123456', 10);

    await User.create({
      email: 'test@testmail.net',
      password: hashPassword,
      avatarURL:
        'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?w=300&ssl=1',
    });
    const response = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@testmail.net', password: '123456' });

    const {
      statusCode,
      body: {
        token,
        user: { email, subscription },
      },
    } = response;

    expect(statusCode).toBe(200);
    expect(token).toBeTruthy();
    expect(email).toBeTruthy();
    expect(subscription).toBeTruthy();

    expect(typeof email).toBe('string');
    expect(typeof subscription).toBe('string');
  });
});
