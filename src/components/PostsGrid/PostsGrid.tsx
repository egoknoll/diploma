import { formatDate } from "../../utils/utils";
import SmallPost from "../SmallPost/SmallPost"
import styles from './PostsGrid.module.scss'

export interface IPost {
    id: number;
    imageUrl: string;
    publishedAt: string;
    title: string
}


interface IPostsGrid {
    posts: IPost[];
}


const PostsGrid = ({ posts }: IPostsGrid) => {
    return (
        <div className={styles.container}>
            {posts.map((el) => 
                    <SmallPost 
                        image={el.imageUrl}
                        date={formatDate(el.publishedAt)}
                        title={el.title}
                        id={el.id}
                        key={el.id}
                />)}
        </div>
    )
}

export default PostsGrid