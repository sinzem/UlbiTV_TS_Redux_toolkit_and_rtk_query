import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"; 
import { IPost } from "../models/IPost";

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl: /* "https://jsonplaceholder.typicode.com" */"http://localhost:5000"}),
    tagTypes: ["Post"], /* (метка тега, далее по ней проставляем точки в эндпоинтах, по которым будет отрабатывать перерендер - в д.с после отработки createPost нужно запустить fetchAllPosts, чтобы отрасовались новые посты на странице) */
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({ /* (как тип указываем массив постов и также будет отправлять числовой лимит постов) */
            query: (limit: number = 5) => ({
                url: "/posts",
                params: { /* (в параметры передаем лимит - будет прикреплять к телу запроса по ключу _limit) */
                    _limit: limit
                }
            }),
            providesTags: result => ["Post"] /* (точка для проверки метки тега) */
        }),
        createPost: build.mutation<IPost, IPost>({ /* (как типы указываем тип обьекта, который вернется, и тип, который ожидаем аргументом) */
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["Post"] /* (точка для проверки метки тега) */
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: ["Post"] 
        }),
        deletePost: build.mutation<IPost, IPost>({ 
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Post"] 
        })
    })
}) /* (подключаем в store/store.ts) */