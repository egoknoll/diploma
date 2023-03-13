import React, { useEffect, useState } from "react";
import { getArticles } from "../../api/posts/post";
import PostsGrid, { IPost } from "../../components/PostsGrid/PostsGrid";
import { useAppSelector } from "../../redux/hook";
import styles from './HomePage.module.scss'




const HomePage = () => {
    const [posts, setPosts] = useState<IPost[]>()
    useEffect(() => {
        (async () => {
            const response = await getArticles()
            setPosts(response.data)
        })();
    },[])
    return (
        <div className={styles.container}>
            {posts ? <PostsGrid posts={posts} /> : null}
        </div>
    )
}

export default HomePage