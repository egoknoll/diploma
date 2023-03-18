import React from "react";
import { useAppSelector } from "../../redux/hook";
import Tab from "../Tab/Tab";
import styles from './CustomTabs.module.scss'

interface ICustomTabs {
    changeTabState: (arg: string) => void
    tabState: string
}

const CustomTabs = ({ changeTabState, tabState }: ICustomTabs) => {
    const theme = useAppSelector((store) => store.theme.value)
    const tabs = ['Articles', 'News']
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            {tabs.map((el) => <Tab content={el} key={Math.random()} changeTabState={changeTabState} tabState={tabState} />)}
        </div>
    )
}


export default CustomTabs