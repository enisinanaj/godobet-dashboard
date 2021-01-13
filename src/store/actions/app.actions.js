export const USER_LOGIN = "USER_LOGIN";
export const SERVICE_DETAILS = "SERVICE_DETAILS";
export const POOL_DETAILS = "POOL_DETAILS";
export const TIPSTER_DETAILS = "TIPSTER_DETAILS";
export const UPDATE_PLAYED_EVENTS = "UPDATE_PLAYED_EVENTS"

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

export function tipsterDetails(tipster) {
  return { type: TIPSTER_DETAILS, tipster };
}

export function updatePlayedEvents(events) {
  return {type: UPDATE_PLAYED_EVENTS, events};
}