`use strict`;

import { API_PREFIX } from 'src/environments/environment';
const TEST_PREFIX = `${API_PREFIX}/api`;

export const TEST = {
  TEST: `${TEST_PREFIX}/test`,
};

/* Authentication API List. */
export const AUTHENTICATION = {
  LOGIN: `${API_PREFIX}/login`,
  LOGOUT: `${API_PREFIX}/logout`,
  SIGN_UP: `${API_PREFIX}/signup`,
};
