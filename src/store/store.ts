import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

/* (получаем типы редьюсера, стора и диспетчера, с их помощью типизируем хуки для получения состоний(hooks/redux.ts)) */
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];