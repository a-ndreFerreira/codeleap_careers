import styles from './Navbar.module.css'

const NAvbar = ({ handleSignout }) => {

    return (
        <nav className={styles.nav}>
            <h2>
                CodeLeap Network
            </h2>
            <button type={'button'} onClick={handleSignout} className={styles.button_nav}>
                Signout
            </button>
        </nav>
    )
}

export default NAvbar;