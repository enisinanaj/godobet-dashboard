export const USER_LOGIN = 'USER_LOGIN';


/**
 * Login user
 */
export function userLogin(user) {
    return { type: USER_LOGIN, user };
}