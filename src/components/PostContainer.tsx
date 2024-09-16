import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {

    const {data: posts} = postAPI.useFetchAllPostsQuery(5); /* (получаем посты с помощью метода из эндпоинта сервиса PostService, название генерируется автоматически(use+имя метода+Query(или Mutation))) */

    return (
        <div className="post__list">
            {posts?.map(post => 
                <PostItem key={post.id} post={post} />
            )}
        </div>
    );
};

export default PostContainer;