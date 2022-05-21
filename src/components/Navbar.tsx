import styles from "../styles/navbar.module.scss"
interface Navs {
    title: string,
}
export const Navbar: React.FC<Navs> = ({ title }) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.leftIcon}></div>
            <div className={styles.title}>{title}</div>
            <div className={styles.rightIcon}></div>
        </nav>
    );
};
