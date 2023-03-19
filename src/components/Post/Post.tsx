import React from "react";
import { FacebookIcon, Horizontal, TwitterIcon } from "../../images/icons/icons";
import { useAppSelector } from "../../redux/hook";
import styles from './Post.module.scss'

interface IPost {
    title: string
    summary: string
    image: string
}


const Post = ({ title, summary, image }: IPost) => {
    const theme = useAppSelector((store) => store.theme.value)
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.summary}>{summary}</div>
            <div className={theme ? styles.icons : styles.iconsDark}>
                <div><FacebookIcon /></div>
                <div><TwitterIcon /></div>
                <div><Horizontal /></div>
            </div>
        </div>
    )
}


export default Post