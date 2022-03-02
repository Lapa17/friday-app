import { profileReducer } from './profile-reducer';
import { registerReducer } from './register-reducer';
import { passwordReducer } from './password-reducer';
import { loginReducer } from './login-reducer';

import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    login: loginReducer,
    password: passwordReducer,
    register: registerReducer,
    profile: profileReducer,

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store 