import { USER_LOGIN } from "../actions/actions";
import { SERVICE_DETAILS } from "../actions/actions";
import { POOL_DETAILS } from "../actions/actions";
import { TIPSTER_DETAILS } from "../actions/actions";

const initialState = {
  user: undefined,
  localUser: undefined,
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
    case POOL_DETAILS:
      return {
        ...state,
        poolDetails: action.pool,
      };
    case TIPSTER_DETAILS:
      return {
        ...state,
        tipsterDetails: action.tipster,
      };
    default:
      return state;
  }
};

export default appReduces;
