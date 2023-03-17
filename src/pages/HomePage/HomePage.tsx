import React, { useEffect, useState } from "react";
import { getArticles, getArticlesCount } from "../../api/posts/post";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import Pagination from "../../components/Pagination/Pagination";
import PostsGrid, { IPost } from "../../components/PostsGrid/PostsGrid";
import Sorting from "../../components/Sorting/Sorting";
import { useAppSelector } from "../../redux/hook";
import { getPagesCount } from "../../utils/utils";
import styles from './HomePage.module.scss'




const HomePage = () => {
    const [posts, setPosts] = useState<IPost[]>()
    const [pages, setPages] = useState<number[]>([1])
    const [page, setPage] = useState<number>(1)
    const [sortByDateValue, setSortByDateValue] = useState<string>('')
    const [sortByAlphaValue, setSortByAlphaValue] = useState<string>('')
    const [tabState, setTabState] = useState('Articles')
    const changeTabState = (tabState: string) => setTabState(tabState)
    const changeSortByAlphaValue = (value: string) => setSortByAlphaValue(value)
    const changeSortByDateValue = (date: string) => setSortByDateValue(date)
    const changePage = (page: number) => setPage(page)
    const theme = useAppSelector((store) => store.theme.value)
    useEffect(() => {
        (async () => {
            const response = await getArticles(page, tabState)
            const postsCount = await getArticlesCount(tabState)
            const pagesCount = getPagesCount(postsCount.data)
            setPosts(response.data)
            setPages(pagesCount)
        })();
    },[page, tabState])
    return (
        <div className={styles.container}>
            <div className={theme ? styles.title : styles.titleDark}>
                <h1>Blog</h1>
            </div>
            <CustomTabs
                changeTabState={changeTabState}
                tabState={tabState}
            />
            <Sorting 
                changeSortByDateValue={changeSortByDateValue} 
                sortByDateValue={sortByDateValue}
                changeSortByAlphaValue={changeSortByAlphaValue}
                sortByAlphaValue={sortByAlphaValue}
            />
            {posts ? <PostsGrid posts={posts} /> : null}
            {!sortByDateValue && !sortByAlphaValue ? <Pagination page={page} changePage={changePage} pages={pages}/> : null}
        </div>
    )
}

export default HomePage