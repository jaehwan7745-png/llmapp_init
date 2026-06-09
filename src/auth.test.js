import test from 'node:test';
import assert from 'node:assert/strict';
import { validateCredentials, login } from './auth.js';

test('validateCredentials returns true for valid user', () => {
  assert.equal(validateCredentials('admin', 'admin123'), true);
});

test('validateCredentials returns false for invalid password', () => {
  assert.equal(validateCredentials('admin', 'wrong'), false);
});

test('validateCredentials returns false for non-string input', () => {
  assert.equal(validateCredentials(null, 'admin123'), false);
  assert.equal(validateCredentials('admin', 123), false);
});

test('login returns success for valid credentials', () => {
  assert.deepEqual(login('guest', 'guest123'), {
    success: true,
    username: 'guest',
  });
});

test('login returns failure for invalid credentials', () => {
  const result = login('admin', 'wrong');
  assert.equal(result.success, false);
  assert.equal(result.message, '잘못된 사용자명 또는 비밀번호입니다.');
});
