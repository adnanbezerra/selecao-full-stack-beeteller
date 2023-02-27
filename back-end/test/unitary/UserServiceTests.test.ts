import { userServices } from '../../src/services/UserServices';
import { conflictError, unauthorizedError } from '../../src/utils/errorUtils';
import { createUser } from '../factories/UserFactory';
import { testingUserRepository } from '../repositories/TestingUserRepository';

beforeEach(() => {
  testingUserRepository.deleteUsers();
});

describe('User service testing', () => {
  it('should be able to create a new user', async () => {
    const payload = createUser();

    await userServices.createNewUser(payload, testingUserRepository);

    expect(testingUserRepository.testIfArrayLengthEqualsTo(1)).toBeTruthy();
  });

  it('should refuse new user due to repeated email', async () => {
    const payload = createUser();

    await userServices.createNewUser(payload, testingUserRepository);
    const promise = userServices.createNewUser(payload, testingUserRepository);

    expect(promise).rejects.toEqual(conflictError('Email already in use!'));
  });

  it('should be able to signIn and return a token', async () => {
    const payload = createUser();

    await userServices.createNewUser(payload, testingUserRepository);
    const promise = await userServices.signIn(payload, testingUserRepository);

    expect(promise).not.toBeNull();
  });

  it('should refuse to signIn due to unexisting user', async () => {
    const payload = createUser();

    const promise = userServices.signIn(payload, testingUserRepository);

    expect(promise).rejects.toEqual(
      unauthorizedError('Wrong email or password!'),
    );
  });

  it('should refuse to signIn due to wrong password', async () => {
    const payload = createUser();
    const wrongPayload = {
      email: 'adnan@gmail.com',
      password: 'lulululu',
    };

    await userServices.createNewUser(payload, testingUserRepository);
    const promise = userServices.signIn(wrongPayload, testingUserRepository);

    expect(promise).rejects.toEqual(
      unauthorizedError('Wrong email or password!'),
    );
  });
});
