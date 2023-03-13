/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = require('../../app');
const { User } = require('../../models/user');

const { DB_HOST_TEST, PORT } = process.env;

describe('response test', () => {
  let server;
  let response;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);

    const hashPassword = await bcrypt.hash('123456', 10);

    await User.create({
      email: 'test@testmail.net',
      password: hashPassword,
      avatarURL:
        'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?w=300&ssl=1',
    });
    response = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@testmail.net', password: '123456' });
  });

  afterAll(async () => {
    server.close();
    await mongoose.disconnect();
  });

  test('status - 200', () => {
    const { statusCode } = response;
    expect(statusCode).toBe(200);
  });

  test('token - true', () => {
    const { token } = response.body;
    expect(token).toBeTruthy();
  });

  test('email - true', () => {
    const { email } = response.body.user;
    expect(email).toBeTruthy();
  });

  test('subscription - true', () => {
    const { subscription } = response.body.user;
    expect(subscription).toBeTruthy();
  });

  test('email is a string - true', () => {
    const { email } = response.body.user;
    expect(typeof email).toBe('string');
  });

  test('subscription is a string - true', () => {
    const { subscription } = response.body.user;
    expect(typeof subscription).toBe('string');
  });
});
