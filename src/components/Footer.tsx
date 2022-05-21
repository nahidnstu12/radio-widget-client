import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import styles from "../styles/footer.module.scss"


export const Footer: React.FC = () => {
    const currentStation = useSelector(
        (state: RootState) => state.radio.selectedStation
    );
    console.log(Object.keys(currentStation).length > 0)
    return (
        <footer className={styles.footer}>
            {Object.keys(currentStation).length > 0 &&
                <>
                    <p>Currently Playing</p>
                    <div className={styles.title}>{currentStation.stationTitle}</div>
                </>
            }
        </footer>
    );
};