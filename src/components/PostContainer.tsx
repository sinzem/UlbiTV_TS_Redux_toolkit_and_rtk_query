import { useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {

    const [limit, setLimit] = useState(100);

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, /* {
        pollingInterval: 1000
    } */); /* (получаем посты с помощью метода из эндпоинта сервиса PostService, название генерируется автоматически(use+имя метода+Query(или Mutation)), также можно импортировать встроенный метод refetch для ручного перезапуска запроса(навесили на кнопку ниже) - данные кеширует, лишних рендеров не вызывает, можно передать pollingInterval, который будет автоматически через заданный интервал перезапускать запрос) */

    const [createPost, {error: createError, isLoading: createIsLoading}] = postAPI.useCreatePostMutation(); /* (функция возвращает массив, где первым идет метод для отправки поста, далее идет обьект с состояниями(loading, error - в д.с переименовываем, так как такие имена уже есть)) */ 
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost) /* (для примера взали данные из prompt, типизируем) */
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post);
    }

    const handleRemove = async (post: IPost) => {
        await deletePost(post);
    }

    return (
        <div className="post__list">
            {/* <button onClick={() => refetch()}>Refetch</button> */}
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {posts && posts?.map(post => 
                <PostItem 
                        key={post.id}
                        post={post} 
                        remove={handleRemove}
                        update={handleUpdate}/>
            )}
        </div>
    );
};

export default PostContainer;