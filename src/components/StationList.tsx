import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import styles from "../styles/stations.module.scss";
import plusIcon from "../img/plus.png";
import minusIcon from "../img/minus.png";
import currentStationImg from "../img/radio.png";
import { toggleStation } from "../redux/radioSlice";

interface IStationItem {
  id: number;
  stationTitle: string;
  frequency: string;
  showStation?: boolean;
}
interface IStation {
  imgUrl: string;
}

export const StationList: React.FC = () => {
  const [radioLists, setRadioLists] = useState<IStationItem[]>([]);

  const radiodata = useSelector((state: RootState) => state.radio.stationLists);
  useEffect(() => {
    setRadioLists(radiodata);
  }, []);
  // console.log(radiodata)
  return (
    <section className={styles.stationSection}>
      <ul>
        {radioLists.map((item) => (
          <StationItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

const StationItem: React.FC<IStationItem> = ({
  id,
  stationTitle,
  frequency,
}) => {
  const dispatch = useAppDispatch();
  const current = useSelector((state: RootState) => state.radio.stationLists);
  const currentStation = useSelector(
    (state: RootState) => state.radio.selectedStation
  );
  const handleStationToggle = () => {
    dispatch(toggleStation(current[id - 1]));
    console.log(current[id - 1]);
  };
  return (
    <li>
      {currentStation?.id === id && (
        <CurrentStation imgUrl={currentStationImg} />
      )}
      <div className={styles.titleBox} onClick={handleStationToggle}>
        <p>{stationTitle}</p>
        <span>{frequency}</span>
      </div>
    </li>
  );
};

const CurrentStation: React.FC<IStation> = ({ imgUrl }) => {
  return (
    <div className={styles.currentStation}>
          <div className={styles.imgBox}>
        <img src={minusIcon} alt="minusIcon"  />
      </div>
      <div>
        <img
          src={imgUrl}
          alt="current radio station"
          className={styles.stationImg}
        />
      </div>
          <div className={styles.imgBox} >
        <img src={plusIcon} alt="plusIcon" />
      </div>
    </div>
  );
};
