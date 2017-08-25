import { combineReducers } from 'redux';

import { dialogReducer } from '../dialog/store/reducer';

export const appReducer = combineReducers({
    dialogs: dialogReducer
});