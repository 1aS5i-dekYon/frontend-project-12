import { configureStore } from "@reduxjs/toolkit"

import { loginFormReducer } from './modules/LoginForm';

export default configureStore({
    reducer: {
        loginData: loginFormReducer,
    }
})