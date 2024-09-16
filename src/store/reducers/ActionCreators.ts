import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
// }

export const fetchUsers = createAsyncThunk( /* (упрощенная функция с помощью createAsyncThunk - передаем название и callback-функцию, вернет три состояния - pending, rejected и fullfield, обрабатываем их в обьекте extraReducers(в UserSlice.ts в д.с)) */
    "user/fetchAll", 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/usrs");
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(`Не удалось загрузить пользователей. Ошибка: ${e.message}`);
        }
    }
)