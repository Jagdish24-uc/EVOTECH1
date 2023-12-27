import styles from "./DashboardSidebarContainer.module.css";

const DashboardSidebarContainer = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.backgroundRectangle} />
      <div className={styles.highlightedRectangle} />
      <div className={styles.topPart}>
        <div className={styles.highlightedRectangle1} />
        <img
          className={styles.arrowDoubleLeft}
          alt=""
          src="/arrow-double-left@2x.png"
        />
        <img
          className={styles.arrowDoubleLeftActive}
          alt=""
          src="/arrow-double-left-active@2x.png"
        />
      </div>
      <div className={styles.iconsBright}>
        <img className={styles.layersIcon} alt="" src="/layers@2x.png" />
        <img
          className={styles.layout4Blocks}
          alt=""
          src="/layout-4-blocks@2x.png"
        />
      </div>
      <div className={styles.headings}>
        <div className={styles.custom}>CUSTOM</div>
      </div>
      <div className={styles.subheadings}>
        <div className={styles.users}>Users</div>
        <div className={styles.contacts}>Contacts</div>
        <div className={styles.chat}>Chat</div>
        <div className={styles.pages}>Pages</div>
      </div>
      <div className={styles.subheadingsActive}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.dashboard1}>DASHBOARD</div>
        <div className={styles.applications}>Applications</div>
      </div>
      <div className={styles.strokes}>
        <div className={styles.strokesChild} />
        <div className={styles.strokesItem} />
        <div className={styles.strokesInner} />
      </div>
      <div className={styles.iconsFaded}>
        <div className={styles.box3}>
          <div className={styles.bound} />
        </div>
        <img
          className={styles.barcodeReadIcon}
          alt=""
          src="/barcode-read@2x.png"
        />
      </div>
      <img className={styles.arrowsIcon} alt="" src="/arrows@2x.png" />
    </div>
  );
};

export default DashboardSidebarContainer;
