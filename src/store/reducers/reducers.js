import { combineReducers } from 'redux';

import settingsReducer from './settings.reducer.js';
import themesReducer from './themes.reducers.js';
import appReducer from './app.reducers.js';

export default combineReducers({
    settings: settingsReducer,
    theme: themesReducer,
    app: appReducer,
});
