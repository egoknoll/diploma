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
    if(theme) {
        return(
            <div className={`
                ${styles.container}
                ${tabState === content ? styles.active : ''}
                `}
                onClick={handleButtonClick}
            >
                <div>{content}</div>
            </div>
        )
    }
    return(
        <div className={`
            ${styles.containerDark}
            ${tabState === content ? styles.activeDark : ''}
            `}
            onClick={handleButtonClick}
        >
            <div>{content}</div>
        </div>
    )
}


export default Tab