import { useEffect } from "react";
import FormContainer from "./FormContainer";
import styles from "./NewArrivalsContainer.module.css";

const NewArrivalsContainer = () => {
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
    <div className={styles.widgets}>
      <div className={styles.widget6}>
        <div className={styles.col5}>
          <div className={styles.row5}>
            <img
              className={styles.buttonTrashIcon}
              alt=""
              src="/button-trash@2x.png"
            />
            <img
              className={styles.buttonEditIcon}
              alt=""
              src="/button-edit@2x.png"
            />
            <img
              className={styles.buttonSettingsIcon}
              alt=""
              src="/button-settings@2x.png"
            />
          </div>
          <div className={styles.row4}>
            <img
              className={styles.buttonTrashIcon}
              alt=""
              src="/button-trash@2x.png"
            />
            <img
              className={styles.buttonEditIcon}
              alt=""
              src="/button-edit@2x.png"
            />
            <img
              className={styles.buttonSettingsIcon}
              alt=""
              src="/button-settings@2x.png"
            />
          </div>
          <div className={styles.row3}>
            <img
              className={styles.buttonTrashIcon}
              alt=""
              src="/button-trash@2x.png"
            />
            <img
              className={styles.buttonEditIcon}
              alt=""
              src="/button-edit@2x.png"
            />
            <img
              className={styles.buttonSettingsIcon}
              alt=""
              src="/button-settings@2x.png"
            />
          </div>
          <div className={styles.row2}>
            <img
              className={styles.buttonTrashIcon}
              alt=""
              src="/button-trash@2x.png"
            />
            <img
              className={styles.buttonEditIcon}
              alt=""
              src="/button-edit@2x.png"
            />
            <img
              className={styles.buttonSettingsIcon}
              alt=""
              src="/button-settings@2x.png"
            />
          </div>
          <div className={styles.row1}>
            <img
              className={styles.buttonTrashIcon}
              alt=""
              src="/button-trash@2x.png"
            />
            <img
              className={styles.buttonEditIcon}
              alt=""
              src="/button-edit@2x.png"
            />
            <img
              className={styles.buttonSettingsIcon}
              alt=""
              src="/button-settings@2x.png"
            />
          </div>
        </div>
        <div className={styles.col4}>
          <div className={styles.button}>
            <div className={styles.background} />
            <div className={styles.inProgress}>In Progress</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.background1} />
            <div className={styles.rejected}>Rejected</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.background2} />
            <div className={styles.success}>Success</div>
          </div>
          <div className={styles.button3}>
            <div className={styles.background3} />
            <div className={styles.inProgress}>In Progress</div>
          </div>
          <div className={styles.button4}>
            <div className={styles.background4} />
            <div className={styles.approved}>Approved</div>
          </div>
        </div>
        <div className={styles.col3}>
          <div className={styles.reactjsRuby}>{`ReactJS, Ruby `}</div>
          <div className={styles.angularjsC}>AngularJS, C#</div>
          <div className={styles.laravelMetronic}>Laravel, Metronic</div>
          <div className={styles.pythonMysql}>Python, MySQL</div>
          <div className={styles.reactjsHtml}>ReactJs, HTML</div>
        </div>
        <div className={styles.col2}>
          <div className={styles.item5}>
            <div className={styles.paid}>Paid</div>
            <div className={styles.div}>$45,200,000</div>
          </div>
          <div className={styles.item4}>
            <div className={styles.paid}>Paid</div>
            <div className={styles.div}>$57,000</div>
          </div>
          <div className={styles.item3}>
            <div className={styles.paid}>Paid</div>
            <div className={styles.div}>$560,000</div>
          </div>
          <div className={styles.item2}>
            <div className={styles.paid}>Paid</div>
            <div className={styles.div}>$4,600,000</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.paid}>Paid</div>
            <div className={styles.div}>$2,000,000</div>
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.item51}>
            <div className={styles.ftpBprowbnccc}>
              <span className={styles.ftp}>FTP:</span>
              <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
            </div>
            <div className={styles.ktrMobileApplication}>
              KTR Mobile Application
            </div>
            <div className={styles.item5Child} />
            <img
              className={styles.kickstarterIcon}
              alt=""
              src="/187kickstarter@2x.png"
            />
          </div>
          <div className={styles.item41}>
            <div className={styles.ftpBprowbnccc}>
              <span className={styles.ftp}>FTP:</span>
              <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
            </div>
            <div className={styles.hrManagement}>HR Management</div>
            <div className={styles.item5Child} />
            <img
              className={styles.kickstarterIcon}
              alt=""
              src="/182bebo@2x.png"
            />
          </div>
          <div className={styles.item31}>
            <div className={styles.ftpBprowbnccc}>
              <span className={styles.ftp}>FTP:</span>
              <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
            </div>
            <div className={styles.ciscoManagement}>Cisco Management</div>
            <div className={styles.item5Child} />
            <img
              className={styles.kickstarterIcon}
              alt=""
              src="/194puzzle@2x.png"
            />
          </div>
          <div className={styles.item21}>
            <div className={styles.ftpBprowbnccc}>
              <span className={styles.ftp}>FTP:</span>
              <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
            </div>
            <div className={styles.hrManagement}>Telegram Application</div>
            <div className={styles.item5Child} />
            <img
              className={styles.telegramIcon}
              alt=""
              src="/186telegram@2x.png"
            />
          </div>
          <div className={styles.item11}>
            <div className={styles.ftpBprowbnccc}>
              <span className={styles.ftp}>FTP:</span>
              <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
            </div>
            <div className={styles.santOutstanding}>Sant Outstanding</div>
            <div className={styles.item5Child} />
            <img
              className={styles.telegramIcon}
              alt=""
              src="/184plurk@2x.png"
            />
          </div>
        </div>
        <div className={styles.head}>
          <div className={styles.tabs}>
            <div className={styles.background5} />
            <div className={styles.day}>Day</div>
            <div className={styles.week}>Week</div>
            <div className={styles.month}>Month</div>
          </div>
          <div className={styles.newArrivals}>New Arrivals</div>
          <div className={styles.moreThan400}>More than 400+ new members</div>
        </div>
      </div>
      <div className={styles.widget5}>
        <div className={styles.item52}>
          <div className={styles.phpSqliteArtisan}>
            PHP, SQLite, Artisan CLIмм
          </div>
          <div className={styles.brivibaSaas}>Briviba SaaS</div>
          <img className={styles.icon} alt="" src="/icon@2x.png" />
        </div>
        <div className={styles.item42}>
          <div className={styles.phpSqliteArtisan}>
            PHP, SQLite, Artisan CLIмм
          </div>
          <div className={styles.brivibaSaas}>Briviba SaaS</div>
          <img className={styles.icon} alt="" src="/icon1@2x.png" />
        </div>
        <div className={styles.item32}>
          <div className={styles.phpSqliteArtisan}>
            PHP, SQLite, Artisan CLIмм
          </div>
          <div className={styles.brivibaSaas}>Briviba SaaS</div>
          <img className={styles.icon} alt="" src="/icon2@2x.png" />
        </div>
        <div className={styles.item22}>
          <div className={styles.phpSqliteArtisan}>
            PHP, SQLite, Artisan CLIмм
          </div>
          <div className={styles.brivibaSaas}>Briviba SaaS</div>
          <img className={styles.icon} alt="" src="/icon3@2x.png" />
        </div>
        <div className={styles.item12}>
          <div className={styles.phpSqliteArtisan}>
            PHP, SQLite, Artisan CLIмм
          </div>
          <div className={styles.brivibaSaas}>Briviba SaaS</div>
          <img className={styles.icon} alt="" src="/icon4@2x.png" />
        </div>
        <div className={styles.head1}>
          <div className={styles.dots}>
            <div className={styles.dotsChild} />
            <div className={styles.dotsItem} />
          </div>
          <div className={styles.salesProgress}>Sales Progress</div>
        </div>
      </div>
      <div className={styles.widget1} data-animate-on-scroll>
        <div className={styles.background6} />
        <FormContainer
          dimension="/vector-5@2x.png"
          imageDimensions="/vector-6@2x.png"
          propWidth="calc(100% - 0.1px)"
        />
      </div>
    </div>
  );
};

export default NewArrivalsContainer;
