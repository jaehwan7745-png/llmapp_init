import { getValidEmails } from './email.js';

console.log('hello cursor');

const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'invalid-email' },
  { name: 'Carol', email: 'carol@test.org' },
];

console.log(getValidEmails(users));
