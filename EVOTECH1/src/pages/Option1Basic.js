import NewArrivalsContainer from "../components/NewArrivalsContainer";
import DashboardSidebarContainer from "../components/DashboardSidebarContainer";
import FormActionsContainer from "../components/FormActionsContainer";
import ContainerHeader from "../components/ContainerHeader";
import SaaSApplicationContainer from "../components/SaaSApplicationContainer";
import FormContainer from "../components/FormContainer";
import ContainerChart from "../components/ContainerChart";
import styles from "./Option1Basic.module.css";

const Option1Basic = () => {
  return (
    <div className={styles.option1Basic}>
      <main className={styles.defaultToggle}>
        <NewArrivalsContainer />
        <DashboardSidebarContainer />
        <FormActionsContainer />
        <ContainerHeader />
      </main>
      <SaaSApplicationContainer />
      <div className={styles.defaultToggle1}>
        <div className={styles.widgets}>
          <div className={styles.widget7}>
            <div className={styles.colTitlesBg} />
            <div className={styles.col6}>
              <img className={styles.buttonIcon} alt="" src="/button@2x.png" />
              <div className={styles.buttonBookmark}>
                <div className={styles.background} />
                <img
                  className={styles.bookmark1Icon}
                  alt=""
                  src="/bookmark-1@2x.png"
                />
              </div>
              <div className={styles.button}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
              <div className={styles.button1}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
              <div className={styles.button2}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
            </div>
            <div className={styles.col5}>
              <div className={styles.item5}>
                <div className={styles.aHero}>A Hero</div>
                <div className={styles.kobeLeonard}>Kobe Leonard</div>
              </div>
              <div className={styles.item4}>
                <div className={styles.avarage}>Avarage</div>
                <img className={styles.starIcon} alt="" src="/star@2x.png" />
                <img className={styles.starIcon1} alt="" src="/star@2x.png" />
                <img className={styles.starIcon2} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon}
                  alt=""
                  src="/halfstart@2x.png"
                />
                <img className={styles.starIcon3} alt="" src="/star1@2x.png" />
              </div>
              <div className={styles.item3}>
                <div className={styles.avarage}>Best Rated</div>
                <img className={styles.starIcon} alt="" src="/star@2x.png" />
                <img className={styles.starIcon1} alt="" src="/star@2x.png" />
                <img className={styles.starIcon2} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon}
                  alt=""
                  src="/star@2x.png"
                />
                <img className={styles.starIcon3} alt="" src="/star@2x.png" />
              </div>
              <div className={styles.item2}>
                <div className={styles.aboveAvarage}>Above Avarage</div>
                <img className={styles.starIcon9} alt="" src="/star@2x.png" />
                <img className={styles.starIcon10} alt="" src="/star@2x.png" />
                <img className={styles.starIcon11} alt="" src="/star@2x.png" />
                <img className={styles.starIcon12} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon1}
                  alt=""
                  src="/halfstart@2x.png"
                />
              </div>
              <div className={styles.item1}>
                <div className={styles.avarage}>Best Rated</div>
                <img className={styles.starIcon} alt="" src="/star@2x.png" />
                <img className={styles.starIcon1} alt="" src="/star@2x.png" />
                <img className={styles.starIcon2} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon}
                  alt=""
                  src="/star@2x.png"
                />
                <img className={styles.starIcon3} alt="" src="/star@2x.png" />
              </div>
              <div className={styles.title}>
                <div className={styles.rating}>RATING</div>
              </div>
            </div>
            <div className={styles.col4}>
              <div className={styles.item5}>
                <div className={styles.aHero}>A Hero</div>
                <div className={styles.kobeLeonard}>Kobe Leonard</div>
              </div>
              <div className={styles.item41}>
                <div className={styles.insurance}>Insurance</div>
                <div className={styles.theHill}>{`The Hill `}</div>
              </div>
              <div className={styles.item31}>
                <div className={styles.insurance}>Transportation</div>
                <div className={styles.theHill}>RoadGee</div>
              </div>
              <div className={styles.item21}>
                <div className={styles.insurance}>{`Houses & Hotels`}</div>
                <div className={styles.theHill}>Agoda</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.insurance}>Web, UI/UX Design</div>
                <div className={styles.theHill}>Intertico</div>
              </div>
              <div className={styles.title1}>
                <div className={styles.rating}>COMPANY</div>
              </div>
            </div>
            <div className={styles.col3}>
              <div className={styles.item5}>
                <div className={styles.paid}>Paid</div>
                <div className={styles.kobeLeonard}>$130</div>
              </div>
              <div className={styles.item41}>
                <div className={styles.insurance}>Pending</div>
                <div className={styles.theHill}>$14,000</div>
              </div>
              <div className={styles.item31}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$6,700</div>
              </div>
              <div className={styles.item21}>
                <div className={styles.insurance}>Rejected</div>
                <div className={styles.theHill}>$1,600</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$520</div>
              </div>
              <div className={styles.title1}>
                <div className={styles.rating}>COMISSION</div>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.item5}>
                <div className={styles.paid}>Paid</div>
                <div className={styles.kobeLeonard}>$1,900</div>
              </div>
              <div className={styles.item41}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$2,600,000</div>
              </div>
              <div className={styles.item31}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$34,000,000</div>
              </div>
              <div className={styles.item21}>
                <div className={styles.insurance}>Pending</div>
                <div className={styles.theHill}>$23,000,000</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.insurance}>In Proccess</div>
                <div className={styles.theHill}>$8,000,000</div>
              </div>
              <div className={styles.title1}>
                <div className={styles.rating}>EARNINGS</div>
              </div>
            </div>
            <div className={styles.col1}>
              <div className={styles.item54}>
                <div className={styles.htmlAngularjsRuby}>
                  HTML, AngularJS, Ruby
                </div>
                <div className={styles.ktrMobileApplication}>
                  KTR Mobile Application
                </div>
                <div className={styles.img}>
                  <img
                    className={styles.product71Icon}
                    alt=""
                    src="/product7-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.item44}>
                <div className={styles.htmlAngularjsRuby}>
                  Python, PostgreSQL, ReactJS
                </div>
                <div className={styles.ktrMobileApplication}>Natali Trump</div>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className={styles.item34}>
                <div className={styles.phpLaravelVuejs}>
                  PHP, Laravel, VueJS
                </div>
                <div className={styles.lebronWayde}>Lebron Wayde</div>
                <div className={styles.item3Child} />
                <img className={styles.boy22Icon} alt="" src="/boy22@2x.png" />
              </div>
              <div className={styles.item24}>
                <div className={styles.cAspnetMs}>C#, ASP.NET, MS SQL</div>
                <div className={styles.jessieClarcson}>Jessie Clarcson</div>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar1@2x.png"
                />
              </div>
              <div className={styles.item14}>
                <div className={styles.cAspnetMs}>HTML, JS, ReactJS</div>
                <div className={styles.jessieClarcson}>Brad Simmons</div>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar2@2x.png"
                />
              </div>
              <div className={styles.title4}>
                <div className={styles.products}>PRODUCTS</div>
              </div>
            </div>
            <div className={styles.head}>
              <div className={styles.button4}>
                <div className={styles.background5} />
                <div className={styles.create}>Create</div>
              </div>
              <div className={styles.button5}>
                <div className={styles.background6} />
                <div className={styles.create}>New Report</div>
              </div>
              <div className={styles.newArrivals}>New Arrivals</div>
              <div className={styles.moreThan400}>
                More than 400+ new members
              </div>
            </div>
          </div>
          <div className={styles.widget6}>
            <div className={styles.col51}>
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
            <div className={styles.col41}>
              <div className={styles.button6}>
                <div className={styles.background7} />
                <div className={styles.inProgress}>In Progress</div>
              </div>
              <div className={styles.button7}>
                <div className={styles.background8} />
                <div className={styles.rejected1}>Rejected</div>
              </div>
              <div className={styles.button8}>
                <div className={styles.background9} />
                <div className={styles.success}>Success</div>
              </div>
              <div className={styles.button9}>
                <div className={styles.background10} />
                <div className={styles.inProgress}>In Progress</div>
              </div>
              <div className={styles.button10}>
                <div className={styles.background11} />
                <div className={styles.approved}>Approved</div>
              </div>
            </div>
            <div className={styles.col31}>
              <div className={styles.reactjsRuby}>{`ReactJS, Ruby `}</div>
              <div className={styles.angularjsC}>AngularJS, C#</div>
              <div className={styles.laravelMetronic}>Laravel, Metronic</div>
              <div className={styles.pythonMysql}>Python, MySQL</div>
              <div className={styles.reactjsHtml}>ReactJs, HTML</div>
            </div>
            <div className={styles.col21}>
              <div className={styles.item55}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$45,200,000</div>
              </div>
              <div className={styles.item45}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$57,000</div>
              </div>
              <div className={styles.item35}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$560,000</div>
              </div>
              <div className={styles.item25}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$4,600,000</div>
              </div>
              <div className={styles.item15}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$2,000,000</div>
              </div>
            </div>
            <div className={styles.col11}>
              <div className={styles.item56}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.ktrMobileApplication1}>
                  KTR Mobile Application
                </div>
                <div className={styles.item3Child} />
                <img
                  className={styles.kickstarterIcon}
                  alt=""
                  src="/187kickstarter@2x.png"
                />
              </div>
              <div className={styles.item46}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.hrManagement}>HR Management</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.kickstarterIcon}
                  alt=""
                  src="/182bebo@2x.png"
                />
              </div>
              <div className={styles.item36}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.ciscoManagement}>Cisco Management</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.kickstarterIcon}
                  alt=""
                  src="/194puzzle@2x.png"
                />
              </div>
              <div className={styles.item26}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.hrManagement}>Telegram Application</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/186telegram@2x.png"
                />
              </div>
              <div className={styles.item16}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.santOutstanding}>Sant Outstanding</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/184plurk@2x.png"
                />
              </div>
            </div>
            <div className={styles.head1}>
              <div className={styles.tabs}>
                <div className={styles.background12} />
                <div className={styles.day}>Day</div>
                <div className={styles.week}>Week</div>
                <div className={styles.month}>Month</div>
              </div>
              <div className={styles.newArrivals}>New Arrivals</div>
              <div className={styles.moreThan4001}>
                More than 400+ new members
              </div>
            </div>
          </div>
          <div className={styles.widget5}>
            <div className={styles.item57}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon5@2x.png" />
            </div>
            <div className={styles.item47}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon6@2x.png" />
            </div>
            <div className={styles.item37}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon7@2x.png" />
            </div>
            <div className={styles.item27}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon8@2x.png" />
            </div>
            <div className={styles.item17}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon9@2x.png" />
            </div>
            <div className={styles.head2}>
              <div className={styles.dots}>
                <div className={styles.dotsChild} />
                <div className={styles.dotsItem} />
              </div>
              <div className={styles.salesProgress}>Sales Progress</div>
            </div>
          </div>
          <div className={styles.widget4}>
            <img
              className={styles.widget4Child}
              alt=""
              src="/vector-9@2x.png"
            />
            <div className={styles.salesChange}>Sales Change</div>
            <div className={styles.div15}>+259</div>
            <img className={styles.icon5} alt="" src="/icon10@2x.png" />
          </div>
          <div className={styles.widget3}>
            <img
              className={styles.widget3Child}
              alt=""
              src="/vector-8@2x.png"
            />
            <div className={styles.salesChange}>Weekly Income</div>
            <div className={styles.div15}>750$</div>
            <img className={styles.icon5} alt="" src="/icon11@2x.png" />
          </div>
          <div className={styles.widget2}>
            <div className={styles.item48}>
              <div className={styles.outlinesKeepYou}>
                Outlines keep you honest. Indulging in poorly driving and keep
                structure keep you honest great
              </div>
              <div className={styles.item4Item} />
              <div className={styles.item4Inner} />
              <div className={styles.div17}>16:50</div>
            </div>
          </div>
          <div className={styles.widget1}>
            <div className={styles.background13} />
            <FormContainer
              dimension="/vector-51@2x.png"
              imageDimensions="/vector-61@2x.png"
              propWidth="100%"
            />
            <div className={styles.carts}>
              <div className={styles.cart4}>
                <div className={styles.background14} />
                <div className={styles.bugReports}>Bug Reports</div>
                <img
                  className={styles.stockholmIconsCommunicatio}
                  alt=""
                  src="/stockholm-icons--communication--urgent-mail@2x.png"
                />
              </div>
              <div className={styles.cart3}>
                <div className={styles.background15} />
                <div className={styles.itemOrders}>Item Orders</div>
                <img
                  className={styles.compilingIcon}
                  alt=""
                  src="/compiling1@2x.png"
                />
              </div>
              <div className={styles.cart2}>
                <div className={styles.background16} />
                <div className={styles.newUsers}>New Users</div>
                <img
                  className={styles.addUserIcon}
                  alt=""
                  src="/adduser@2x.png"
                />
              </div>
              <div className={styles.cart1}>
                <div className={styles.background17} />
                <div className={styles.equalizer}>
                  <div className={styles.bound} />
                  <div className={styles.rectangle62Copy} />
                  <div className={styles.rectangle62Copy2} />
                  <div className={styles.rectangle62Copy4} />
                  <div className={styles.rectangle62Copy3} />
                </div>
                <div className={styles.newUsers}>Weekly Sales</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.quickToolsIcon}
          alt=""
          src="/quick-tools@2x.png"
        />
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
            <div className={styles.metronic}>METRONIC</div>
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
            <div className={styles.layout}>LAYOUT</div>
            <div className={styles.components}>COMPONENTS</div>
          </div>
          <div className={styles.subheadings}>
            <div className={styles.users}>Users</div>
            <div className={styles.contacts}>Contacts</div>
            <div className={styles.chat}>Chat</div>
            <div className={styles.pages}>Pages</div>
            <div className={styles.subheaders}>Subheaders</div>
            <div className={styles.general}>General</div>
            <div className={styles.builder}>Builder</div>
            <div className={styles.base}>Base</div>
            <div className={styles.custom1}>Custom</div>
            <div className={styles.extended}>Extended</div>
            <div className={styles.icons}>Icons</div>
            <div className={styles.portlets}>Portlets</div>
          </div>
          <div className={styles.subheadingsActive}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.applications}>Applications</div>
          </div>
          <div className={styles.strokes}>
            <div className={styles.strokesChild} />
            <div className={styles.strokesItem} />
            <div className={styles.strokesInner} />
          </div>
          <img className={styles.iconsFaded} alt="" src="/icons-faded@2x.png" />
          <img className={styles.arrowsIcon} alt="" src="/arrows1@2x.png" />
        </div>
        <div className={styles.sunheader}>
          <div className={styles.background18} />
          <div className={styles.left}>
            <div className={styles.dashboard1}>Dashboard</div>
            <div className={styles.xrs45670}>#XRS-45670</div>
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
            <div className={styles.month1}>
              <div className={styles.monthActive}>
                <div className={styles.monthActiveChild} />
                <div className={styles.month2}>{`Month `}</div>
              </div>
              <div className={styles.month3}>{`Month `}</div>
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
        <div className={styles.header}>
          <div className={styles.sep} />
          <div className={styles.right1}>
            <div className={styles.icons1}>
              <img className={styles.searchIcon} alt="" src="/search1@2x.png" />
              <img
                className={styles.compilingIcon1}
                alt=""
                src="/compiling2@2x.png"
              />
              <div className={styles.equalizer1}>
                <div className={styles.bound} />
                <div className={styles.rectangle62Copy1} />
                <div className={styles.rectangle62Copy21} />
                <div className={styles.rectangle62Copy41} />
                <div className={styles.rectangle62Copy31} />
              </div>
              <img
                className={styles.stockholmIconsShoppingC}
                alt=""
                src="/stockholm-icons--shopping--cart31@2x.png"
              />
              <img
                className={styles.layout4BlocksIcon}
                alt=""
                src="/layout4blocks2@2x.png"
              />
              <img className={styles.flagIcon} alt="" src="/flag@2x.png" />
            </div>
            <div className={styles.hiSean}>
              <span>Hi,</span>
              <span className={styles.sean}> Sean</span>
            </div>
            <div className={styles.initialIcon}>
              <div className={styles.rectangle} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.left1}>
            <div className={styles.pages1}>
              <div className={styles.todayActiveChild} />
              <div className={styles.pages2}>Pages</div>
            </div>
            <div className={styles.features}>
              <div className={styles.featuresActive}>
                <div className={styles.active} />
                <div className={styles.featuresActive1}>Features</div>
              </div>
              <div className={styles.features1}>Features</div>
            </div>
            <div className={styles.apps}>
              <div className={styles.appsActive}>
                <div className={styles.active} />
                <div className={styles.apps1}>Apps</div>
              </div>
              <div className={styles.features1}>Apps</div>
            </div>
          </div>
        </div>
        <img className={styles.toggleIcon} alt="" src="/toggle@2x.png" />
        <img className={styles.toggleIcon1} alt="" src="/toggle1@2x.png" />
      </div>
      <div className={styles.widget21}>
        <ContainerChart />
        <div className={styles.top}>
          <div className={styles.tabs}>
            <div className={styles.background19} />
            <div className={styles.day}>Day</div>
            <div className={styles.week}>Week</div>
            <div className={styles.month}>Month</div>
          </div>
          <div className={styles.newArrivals}>Recent Stats</div>
          <div className={styles.moreThan4002}>More than 400+ new members</div>
        </div>
      </div>
    </div>
  );
};

export default Option1Basic;
