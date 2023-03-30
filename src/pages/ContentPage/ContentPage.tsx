import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePost } from '../../api/posts/post';
import { useAppSelector } from '../../redux/hook';
import styles from './ContentPage.module.scss'
import SmallPost, { ISmallPost } from '../../components/SmallPost/SmallPost';
import Post from '../../components/Post/Post';
import { IPost } from '../../components/PostsGrid/PostsGrid';
import { api } from '../../api';
import { nanoid } from '@reduxjs/toolkit';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'react-responsive'
import { getMedia } from '../../utils/utils';


export interface Post extends ISmallPost {
    summary: string
    imageUrl: string
}

export interface IResponse {
    data: Post
}

const ContentPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setpostState] = useState<Post>()
    const [posts, setPosts] = useState<IPost[]>()
    const theme = useAppSelector((store) => store.theme.value)
    const category = useAppSelector((store) => store.category.value)
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 740px)' })
    useEffect(() => {
        (async () => {
            const response = await getSinglePost(id, category)
            const postsResponse = await api.get(`/${category === 'Articles' ? 'articles' : 'blogs'}?_limit=12`)
            setpostState(response.data)
            setPosts(postsResponse.data)
        })()
    }, [id, category])
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.subTitle}>
                <div onClick={() => navigate('/news')}>Home <span>/ Post {id}</span></div>
            </div>
            {post ? <Post title={post.title} summary={post.summary} image={post.imageUrl} />: null}
            <div className={styles.posts}>
            <Swiper
                spaceBetween={20}
                slidesPerView={getMedia(isTablet, isMobile)}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {posts ? posts.map((el) =>
                        <SwiperSlide key={nanoid()}> 
                            <SmallPost image={el.imageUrl} date={el.publishedAt} title={el.title} id={el.id} key={nanoid()} />
                        </SwiperSlide>
                        ): null}
            </Swiper>
            </div>
        </div>
    )
}

export default ContentPage