import { useAppSelector } from '../../redux/hook'
import Search from '../Search/Search'
import styles from './Header.module.scss'


const Header = () => {
    const theme = useAppSelector((store) => store.theme.value)
    return (
        <div className={theme ? styles.container : styles.containerDark}>
            <div className={styles.search}>
                <div className={styles.image}></div>
                <Search />
            </div>
            <div className={styles.authContainer}>asdassdaasdasd</div>
        </div>
    )
}

export default Header