import supertest from 'supertest';
import server from '../../src';
import { client } from '../../src/database/prisma';
import { createUser } from '../factories/UserFactory';

beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
});

const connection = supertest(server);

describe('UserRouter tests', () => {
  it('should accept regular post sign-up', async () => {
    const payload = createUser();

    const result = await connection.post('/sign-up').send(payload);

    expect(result.status).toEqual(201);
  });

  it('should reject irregular post sign-up with invalid email', async () => {
    const payload = {
      email: '',
      password: 'lele',
    };

    const result = await connection.post('/sign-up').send(payload);

    expect(result.status).toEqual(422);
  });

  it('should reject post sign-up with repeated email', async () => {
    const payload = createUser();

    await connection.post('/sign-up').send(payload);
    const result = await connection.post('/sign-up').send(payload);

    expect(result.status).toEqual(409);
  });

  it('should accept regular post login', async () => {
    await connection.post('/sign-up').send(createUser());

    const payload = {
      email: 'adnan@gmail.com',
      password: 'lelelele',
    };

    const result = await connection.post('/sign-in').send(payload);

    expect(result.status).toEqual(200);
    expect(result.body).toBeInstanceOf(Object);
  });

  it('should reject post sign-in with unexisting email', async () => {
    await connection.post('/sign-up').send(createUser());

    const payload = {
      email: '',
      password: 'lelelele',
    };

    const result = await connection.post('/sign-in').send(payload);

    expect(result.status).toEqual(422);
  });

  it('should reject post sign-in with invalid data', async () => {
    await connection.post('/sign-up').send(createUser());

    const payload = {
      email: '',
      password: 'lelelele',
    };

    const result = await connection.post('/sign-in').send(payload);

    expect(result.status).toEqual(422);
  });

  it('should reject post sign-in with wrong data', async () => {
    await connection.post('/sign-up').send(createUser());
    const payload = {
      email: 'adnan@gmail.com',
      password: 'lililili',
    };

    const result = await connection.post('/sign-in').send(payload);

    expect(result.status).toEqual(401);
  });
});

afterAll(async () => {
  await client.$disconnect();
});
