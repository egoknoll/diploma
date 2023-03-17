import React from "react";
import { useAppSelector } from "../../redux/hook";
import styles from './Tab.module.scss'


interface ITab {
    content: string
    changeTabState: (arg: string) => void
    tabState: string
}

const Tab = ({ content, tabState, changeTabState }: ITab) => {
    const theme = useAppSelector((store) => store.theme.value)
    const handleButtonClick = () => {
        if(tabState === 'Articles') {
            changeTabState('News')
        } else if (tabState === 'News') {
            changeTabState('Articles')
        }
    }
    return(
        <div className={`
            ${theme ? styles.container : styles.containerDark}
            ${theme && tabState === content ? styles.active : styles.activeDark}
            `}
            onClick={handleButtonClick}
        >
            <div>{content}</div>
        </div>
    )
}


export default Tab