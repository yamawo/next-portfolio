import styles from "./Tab.module.css";
import { TabNumber } from "../../../../models";
import * as React from "react";

interface Props {
  selectedTabNumber: TabNumber;
  onClickTab: (number) => void;
}

export const Tab: React.FC<Props> = ({ selectedTabNumber, onClickTab }) => {
  const tabList = ["Home", "Skills", "Works"];

  const [deletedAry, setDeletedAry] = React.useState<number[]>([]);

  const handleClickTab = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      onClickTab(Number.parseInt(e.currentTarget.dataset.id, 10));
    },
    [onClickTab]
  );

  return (
    <>
      {tabList.map((t, index) => (
        <div className={selectedTabNumber === index ? `${styles.selected} ${styles.tab}` : `${styles.tab}`}>
          <div data-id={index} className={`${styles.tab_content}`} onClick={handleClickTab}>
            <p className={`${styles.content_text}`}>{t}</p>
            <button className={`${styles.tab_content_button}`}>×</button>
          </div>
          <div className={`${styles.tab_bottom}`}>
            <div className={`${styles.tab_bottom_bar}`}>
              <div className={`${styles.radian_left}`}></div>
              <div className={`${styles.radian_right}`}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
