import { useEffect } from "react";
import styles from "./ContainerHeader.module.css";

const ContainerHeader = () => {
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
    <div className={styles.header}>
      <div className={styles.sep} />
      <div className={styles.right}>
        <div className={styles.icons} data-animate-on-scroll>
          <img className={styles.searchIcon} alt="" src="/search@2x.png" />
          <img
            className={styles.compilingIcon}
            alt=""
            src="/compiling@2x.png"
          />
          <div className={styles.equalizer}>
            <div className={styles.bound} />
            <div className={styles.rectangle62Copy} />
            <div className={styles.rectangle62Copy2} />
            <div className={styles.rectangle62Copy4} />
            <div className={styles.rectangle62Copy3} />
          </div>
          <img
            className={styles.stockholmIconsShoppingC}
            alt=""
            src="/stockholm-icons--shopping--cart3@2x.png"
          />
          <img
            className={styles.layout4BlocksIcon}
            alt=""
            src="/layout4blocks@2x.png"
          />
        </div>
        <div className={styles.nickThomas}>Nick Thomas</div>
        <div className={styles.initialIcon}>
          <div className={styles.rectangle} />
          <div className={styles.n}>N</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerHeader;
