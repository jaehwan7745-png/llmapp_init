/** @typedef {{ username: string, password: string }} UserCredentials */

const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'guest', password: 'guest123' },
];

/**
 * 사용자명과 비밀번호가 유효한지 검증한다.
 * @param {unknown} username - 사용자명
 * @param {unknown} password - 비밀번호
 * @returns {boolean} 자격 증명이 유효하면 true
 */
export function validateCredentials(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }
  return users.some(
    (user) => user.username === username && user.password === password,
  );
}

/**
 * 로그인을 수행하고 성공 시 사용자명을 반환한다.
 * @param {unknown} username - 사용자명
 * @param {unknown} password - 비밀번호
 * @returns {{ success: true, username: string } | { success: false, message: string }} 로그인 결과
 */
export function login(username, password) {
  if (!validateCredentials(username, password)) {
    return { success: false, message: '잘못된 사용자명 또는 비밀번호입니다.' };
  }
  return { success: true, username };
}
