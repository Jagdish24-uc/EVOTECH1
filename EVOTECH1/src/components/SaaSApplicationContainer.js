import styles from "./SaaSApplicationContainer.module.css";

const SaaSApplicationContainer = () => {
  return (
    <div className={styles.tabs1}>
      <div className={styles.item1}>
        <div className={styles.iconText}>
          <div className={styles.saasApplication}>
            <p className={styles.saas}>SaaS</p>
            <p className={styles.saas}>Application</p>
          </div>
          <img className={styles.libraryIcon} alt="" src="/library@2x.png" />
        </div>
      </div>
      <div className={styles.item2}>
        <div className={styles.iconText1}>
          <div className={styles.mainCategories}>
            <p className={styles.saas}>Main</p>
            <p className={styles.saas}>Categories</p>
          </div>
          <img
            className={styles.layout4BlocksIcon}
            alt=""
            src="/layout4blocks1@2x.png"
          />
        </div>
      </div>
      <div className={styles.item3}>
        <div className={styles.iconText2}>
          <div className={styles.videoTutorials}>
            <p className={styles.saas}>Video</p>
            <p className={styles.saas}>Tutorials</p>
          </div>
          <img
            className={styles.movieLane2Icon}
            alt=""
            src="/movielane2@2x.png"
          />
        </div>
      </div>
      <div className={styles.item4}>
        <div className={styles.iconText3}>
          <div className={styles.salesStatistics}>
            <p className={styles.saas}>Sales</p>
            <p className={styles.saas}>Statistics</p>
          </div>
          <div className={styles.equalizer}>
            <div className={styles.bound} />
            <div className={styles.rectangle62Copy} />
            <div className={styles.rectangle62Copy2} />
            <div className={styles.rectangle62Copy4} />
            <div className={styles.rectangle62Copy3} />
          </div>
        </div>
      </div>
      <div className={styles.item5}>
        <div className={styles.iconText4}>
          <div className={styles.arcSecurity}>
            <p className={styles.saas}>ARC</p>
            <p className={styles.saas}>Security</p>
          </div>
          <img
            className={styles.shieldCheckIcon}
            alt=""
            src="/shieldcheck@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SaaSApplicationContainer;
