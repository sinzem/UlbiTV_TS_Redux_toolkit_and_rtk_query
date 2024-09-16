import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer /* (редьюсер, созданный с помощью RTKQuery, путь формируем динамически, для работы обязательно подключить в store в миддлверы(ниже, сам миддлвер формируется автоматически)) */
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

/* (получаем типы редьюсера, стора и диспетчера, с их помощью типизируем хуки для получения состоний(hooks/redux.ts)) */
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];