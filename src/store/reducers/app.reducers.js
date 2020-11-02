import { USER_LOGIN } from "../actions/actions";
import { SERVICE_DETAILS } from "../actions/actions";

const initialState = {
  user: undefined,
  loggedIn: false,
  serviceDetails: {},
};

const appReduces = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.user,
        loggedIn: !!action.user,
      };
    case SERVICE_DETAILS:
      return {
        ...state,
        serviceDetails: action.service,
      };
    default:
      return state;
  }
};

export default appReduces;
