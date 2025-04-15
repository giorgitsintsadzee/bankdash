import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.conteiner}>
            <div className={styles.logo}>
                <img src="/images/logo.svg" alt="logo" />
                <div className={styles.ovwerview}>
                    Overview
                </div>
                <div className={styles.mobile}>
                    <img src="/images/icon.svg" alt="profile" className={styles.profile} />
                </div>
            </div>
            <div className={styles.options}>
                <div className={styles.searchBar}>
                    <input type='search' placeholder='search for something' className={styles.searchInput} />
                    <div className={styles.icon}>
                        <img src="/images/search.svg" alt="search icon" />
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.setting}>
                        <img src="/images/settings.svg" alt="setting icon" />
                    </div>
                    <div className={styles.setting}>
                        <img src="/images/notification.svg" alt="notifications icon" />
                    </div>
                    <div>
                        <img src="/images/icon.svg" alt="profile" className={styles.profile} />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Header