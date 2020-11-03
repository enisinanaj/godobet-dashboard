export const USER_LOGIN = "USER_LOGIN";
export const SERVICE_DETAILS = "SERVICE_DETAILS";
export const POOL_DETAILS = "POOL_DETAILS";

/**
 * Login user
 */
export function userLogin(user) {
  return { type: USER_LOGIN, user };
}

export function serviceDetails(service) {
  return { type: SERVICE_DETAILS, service };
}

export function poolDetails(pool) {
  return { type: POOL_DETAILS, pool };
}
