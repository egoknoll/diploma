import React, { useEffect, useState } from "react";
import { getArticles, getArticlesCount } from "../../api/posts/post";
import Pagination from "../../components/Pagination/Pagination";
import PostsGrid, { IPost } from "../../components/PostsGrid/PostsGrid";
import Sorting from "../../components/Sorting/Sorting";
import { getPagesCount } from "../../utils/utils";
import styles from './HomePage.module.scss'




const HomePage = () => {
    const [posts, setPosts] = useState<IPost[]>()
    const [pages, setPages] = useState<number[]>([1])
    const [page, setPage] = useState<number>(1)
    const changePage = (page: number) => setPage(page)
    useEffect(() => {
        (async () => {
            const response = await getArticles(page)
            const postsCount = await getArticlesCount()
            const pagesCount = getPagesCount(postsCount.data)
            setPosts(response.data)
            setPages(pagesCount)
        })();
    },[page])
    return (
        <div className={styles.container}>
            <Sorting />
            {posts ? <PostsGrid posts={posts} /> : null}
            <Pagination page={page} changePage={changePage} pages={pages}/>
        </div>
    )
}

export default HomePage