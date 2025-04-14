import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.conteiner}>
            <div className={styles.logo}>
                <img src="images/logo.svg" alt="logo" />
                <div>
                    oevrview
                </div>
            </div>
            <div className={styles.options}>
                <div className={styles.searchBar}>
                    <input type='search' placeholder='search for something' />
                    <div className={styles.icon}>
                        <img src="images/search.svg" alt="search icon" />
                    </div>
                </div>
                <div>seeting</div>
                <div>alert</div>
                <div>profile</div>
            </div>
        </div>
    )


}

export default Header