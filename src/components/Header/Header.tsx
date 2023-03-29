import { useAppSelector } from '../../redux/hook'
import Search from '../Search/Search'
import UserInfo from '../UserInfo/UserInfo'
import styles from './Header.module.scss'


const Header = () => {
    const theme = useAppSelector((store) => store.theme.value)
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.search}>
                <div className={styles.image}></div>
            </div>
            <Search />
            <div className={styles.authContainer}>
                <UserInfo />
            </div>
        </div>
    )
}

export default Header