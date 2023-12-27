import styles from "./FormActionsContainer.module.css";

const FormActionsContainer = () => {
  return (
    <div className={styles.sunheader}>
      <div className={styles.background} />
      <div className={styles.left}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.addNewButton}>
          <div className={styles.addNewButtonChild} />
          <div className={styles.addNew}>Add New</div>
        </div>
        <div className={styles.leftChild} />
      </div>
      <div className={styles.right}>
        <div className={styles.today}>
          <div className={styles.today1}>Today</div>
          <div className={styles.todayActive}>
            <div className={styles.todayActiveChild} />
            <div className={styles.today1}>Today</div>
          </div>
        </div>
        <div className={styles.month}>
          <div className={styles.monthActive}>
            <div className={styles.monthActiveChild} />
            <div className={styles.month1}>{`Month `}</div>
          </div>
          <div className={styles.month2}>{`Month `}</div>
        </div>
        <div className={styles.year}>
          <div className={styles.year1}>Year</div>
          <div className={styles.yearActive}>
            <div className={styles.monthActiveChild} />
            <div className={styles.yearActive1}>Year</div>
          </div>
        </div>
        <div className={styles.actionsButtonPassive}>
          <div className={styles.todayActiveChild} />
          <div className={styles.actions}>Actions</div>
        </div>
        <div className={styles.actionsButtonActive}>
          <div className={styles.actionsButtonActiveChild} />
          <div className={styles.actions1}>Actions</div>
          <img className={styles.sort1Icon} alt="" src="/sort1@2x.png" />
        </div>
        <img
          className={styles.filePlusIcon}
          alt=""
          src="/file-plus-icon@2x.png"
        />
      </div>
    </div>
  );
};

export default FormActionsContainer;
