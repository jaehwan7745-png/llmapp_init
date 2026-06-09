import test from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

test('extractEmails returns emails from user array', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];
  assert.deepEqual(extractEmails(users), ['alice@example.com', 'bob@example.com']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
  assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail validates email format', () => {
  assert.equal(isValidEmail('alice@example.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(123), false);
});

test('isValidEmail accepts RFC 5322 formats', () => {
  assert.equal(isValidEmail('user+tag@example.com'), true);
  assert.equal(isValidEmail('user.name@example.co.uk'), true);
  assert.equal(isValidEmail('"hello"@example.com'), true);
  assert.equal(isValidEmail('user@192.168.0.1'), true);
});

test('isValidEmail rejects invalid formats', () => {
  assert.equal(isValidEmail('missing-at-sign.com'), false);
  assert.equal(isValidEmail('@example.com'), false);
  assert.equal(isValidEmail('user@'), false);
});

test('getValidEmails returns only valid emails', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'not-an-email' },
    { name: 'Carol', email: 'carol@test.org' },
  ];
  assert.deepEqual(getValidEmails(users), ['alice@example.com', 'carol@test.org']);
});

test('getValidEmails returns empty array for non-array input', () => {
  assert.deepEqual(getValidEmails(null), []);
});
