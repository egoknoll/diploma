import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticles, getArticlesCount } from "../../api/posts/post";
import PostsGrid, { IPost } from "../../components/PostsGrid/PostsGrid";
import { useAppSelector } from "../../redux/hook";
import styles from './SearchPage.module.scss'
import { getPagesCount } from "../../utils/utils";
import Pagination from "../../components/Pagination/Pagination";


const SearchPage = () => {
    const theme = useAppSelector((store) => store.theme.value)
    const searchState = useAppSelector((store)=> store.search.value)
    const navigate = useNavigate()
    const [posts, setPosts] = useState<IPost[]>()
    const [pages, setPages] = useState<number[]>([1])
    const [page, setPage] = useState<number>(1)
    const changePage = (page: number) => setPage(page)
    useEffect(() => {
        (async () => {
            const response = await getArticles(page, 'Articles', '', '', searchState)
            const postsCount = await getArticlesCount('Articles', '', '', searchState)
            const pagesCount = getPagesCount(postsCount.data)
            setPosts(response.data)
            setPages(pagesCount)
        })()
    }, [searchState, page])
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.button} onClick={() => navigate('/news')}>Back to home</div>
            <h1 className={styles.title}>Search results : {searchState ? `‘${searchState}’` : 'none'}</h1>
            {posts ? <PostsGrid posts={posts} />: null}
            <div className={styles.paginationContainer}>
                <Pagination page={page} pages={pages} changePage={changePage} />
            </div>
        </div>
    )
}

export default SearchPage