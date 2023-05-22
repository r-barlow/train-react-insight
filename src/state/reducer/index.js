import {combineReducers} from "redux";

import {authReducer} from "./auth.reducer";
import {profileReducer} from "./profile.reducer";

const rootReducer = combineReducers({
    auth_store: authReducer,
    profile_store: profileReducer
});

export default rootReducer;