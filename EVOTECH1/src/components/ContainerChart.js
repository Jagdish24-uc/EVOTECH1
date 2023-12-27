import { useEffect } from "react";
import styles from "./ContainerChart.module.css";

const ContainerChart = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.chart} data-animate-on-scroll>
      <div className={styles.dottedLines}>
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
        <div className={styles.line5} />
      </div>
      <div className={styles.xAxis}>
        <div className={styles.aug}>1 Aug</div>
        <div className={styles.aug1}>8 Aug</div>
        <div className={styles.aug2}>151 Aug</div>
        <div className={styles.aug3}>22 Aug</div>
        <div className={styles.aug4}>29 Aug</div>
        <div className={styles.sep}>5 Sep</div>
      </div>
      <div className={styles.yAxis}>
        <div className={styles.div}>150</div>
        <div className={styles.div1}>120</div>
        <div className={styles.div2}>90</div>
        <div className={styles.div3}>60</div>
        <div className={styles.div4}>30</div>
        <div className={styles.div5}>0</div>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <img
            className={styles.columnChild}
            alt=""
            src="/rectangle-169@2x.png"
          />
          <div className={styles.columnItem} />
        </div>
        <div className={styles.column1}>
          <img
            className={styles.columnInner}
            alt=""
            src="/rectangle-1691@2x.png"
          />
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.column2}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-1692@2x.png"
          />
          <div className={styles.columnChild1} />
        </div>
        <div className={styles.column3}>
          <img
            className={styles.columnChild2}
            alt=""
            src="/rectangle-1693@2x.png"
          />
          <div className={styles.columnChild3} />
        </div>
        <div className={styles.column4}>
          <img
            className={styles.columnChild4}
            alt=""
            src="/rectangle-1694@2x.png"
          />
          <div className={styles.columnChild5} />
        </div>
        <div className={styles.column5}>
          <img
            className={styles.columnChild6}
            alt=""
            src="/rectangle-1695@2x.png"
          />
          <div className={styles.columnChild7} />
        </div>
      </div>
    </div>
  );
};

export default ContainerChart;
