import { IsAny } from "@reduxjs/toolkit/dist/tsHelpers";
import React from "react";
import { useAppSelector } from "../../redux/hook";
import styles from './SmallPost.module.scss'

interface ISmallPost {
    image: string;
    date: string;
    title: string;
    id: number;
}


const SmallPost = ({ image, date, title }: ISmallPost) => {
    const theme = useAppSelector((store) => store.theme.value)
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <img className={styles.image} src={image} alt='image not found' />
            <div>{date}</div>
            <h1>{title}</h1>
        </div>
    )
}


export default SmallPost