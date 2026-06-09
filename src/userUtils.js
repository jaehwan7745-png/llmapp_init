import { isValidEmail } from './email.js';

/**
 * 유효한 이메일을 가진 사용자만 반환한다.
 * @param {{ email?: unknown }[]} users - 사용자 배열
 * @returns {{ email?: unknown }[]} 유효한 이메일을 가진 사용자 배열
 */
export function getUsersWithValidEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.filter((user) => isValidEmail(user?.email));
}
