import { useMemo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({ dimension, imageDimensions, propWidth }) => {
  const topStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.top} style={topStyle}>
      <img className={styles.topChild} alt="" src={dimension} />
      <img className={styles.topItem} alt="" src={imageDimensions} />
      <div className={styles.exportButton}>
        <div className={styles.button} />
        <div className={styles.export}>Export</div>
        <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
      </div>
      <div className={styles.categories}>Categories</div>
    </div>
  );
};

export default FormContainer;
