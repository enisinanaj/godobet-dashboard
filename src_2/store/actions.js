export const COLLAPSE_MENU = "COLLAPSE_MENU";
export const COLLAPSE_TOGGLE = "COLLAPSE_TOGGLE";
export const FULL_SCREEN = "FULL_SCREEN";
export const FULL_SCREEN_EXIT = "FULL_SCREEN_EXIT";
export const CHANGE_LAYOUT = "CHANGE_LAYOUT";
export const CHANGE_SUB_LAYOUT = "CHANGE_SUB_LAYOUT";
export const LAYOUT_TYPE = "LAYOUT_TYPE";
export const RESET = "RESET";
export const NAV_BACK_COLOR = "NAV_BACK_COLOR";
export const NAV_BRAND_COLOR = "NAV_BRAND_COLOR";
export const HEADER_BACK_COLOR = "HEADER_BACK_COLOR";
export const RTL_LAYOUT = "RTL_LAYOUT";
export const NAV_FIXED_LAYOUT = "NAV_FIXED_LAYOUT";
export const HEADER_FIXED_LAYOUT = "HEADER_FIXED_LAYOUT";
export const BOX_LAYOUT = "BOX_LAYOUT";
export const NAV_CONTENT_LEAVE = "NAV_CONTENT_LEAVE";
export const NAV_COLLAPSE_LEAVE = "NAV_COLLAPSE_LEAVE";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const SERVICE_DETAILS = "SERVICE_DETAILS";
export const POOL_DETAILS = "POOL_DETAILS";
export const TIPSTER_DETAILS = "TIPSTER_DETAILS";
export const UPDATE_PLAYED_EVENTS = "UPDATE_PLAYED_EVENTS";

/**
 * Login user
 */
export function userLogin(user) {
  return { type: USER_LOGIN, user };
}

/**
 * Logout user
 */
export function userLogout(user) {
  return { type: USER_LOGOUT, user };
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
  return { type: UPDATE_PLAYED_EVENTS, events };
}
