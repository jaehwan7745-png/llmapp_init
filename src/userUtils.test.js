import test from 'node:test';
import assert from 'node:assert/strict';
import { getUsersWithValidEmails } from './userUtils.js';

test('getUsersWithValidEmails returns only users with valid emails', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'not-an-email' },
    { name: 'Carol', email: 'carol@test.org' },
  ];
  assert.deepEqual(getUsersWithValidEmails(users), [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Carol', email: 'carol@test.org' },
  ]);
});

test('getUsersWithValidEmails returns empty array for non-array input', () => {
  assert.deepEqual(getUsersWithValidEmails(null), []);
  assert.deepEqual(getUsersWithValidEmails(undefined), []);
});
