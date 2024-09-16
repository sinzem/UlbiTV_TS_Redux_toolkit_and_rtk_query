import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"; 
import { IPost } from "../models/IPost";

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({ /* (как тип указываем массив постов и также будет отправлять числовой лимит постов) */
            query: (limit: number = 5) => ({
                url: "/posts",
                params: { /* (в параметры передаем лимит - будет прикреплять к телу запроса по ключу _limit) */
                    _limit: limit
                }
            })
        })
    })
}) /* (подключаем в store/store.ts) */