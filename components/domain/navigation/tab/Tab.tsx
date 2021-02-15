import styles from "./Tab.module.css";
import { TabNumber } from "../../../../models";
import { excludeNumberArray } from "../../../../utils";
import * as React from "react";
import Link from "next/link";
import { TabService } from "../../../../services";

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

  const handleClickDeleteButton = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      const targetTabNumber = Number.parseInt(e.currentTarget.dataset.id, 10);
      // 削除するタブを追加
      setDeletedAry([...deletedAry, targetTabNumber]);

      // 削除されたタブがselectedだった場合、次に selected にするタブを求める
      // const tabNumberAry = TabService.makeTabNumberAry(tabList)
      // const currentTabAry = excludeNumberArray(tabNumberAry, deletedAry)
      // if (selectedTabNumber === targetTabNumber && currentTabAry.length !== 0) {
      //   const nextSetTabNumber = ;

      //   onClickTab(nextSetTabNumber);
      // }
    },
    [deletedAry, onClickTab]
  );

  return (
    <>
      {tabList.map((t, index) =>
        deletedAry.includes(index) ? null : (
          <div className={selectedTabNumber === index ? `${styles.selected} ${styles.tab}` : `${styles.tab}`}>
            <div data-id={index} className={`${styles.tab_content}`} onClick={handleClickTab}>
              <Link href={`/${t.toLowerCase()}`} replace>
                <a className={`${styles.content_text}`}>{t}</a>
              </Link>
              <button data-id={index} className={`${styles.tab_content_button}`} onClick={handleClickDeleteButton}>
                ×
              </button>
            </div>
            {selectedTabNumber === index ? (
              <div className={`${styles.tab_bottom}`}>
                <div className={`${styles.tab_bottom_bar}`}>
                  <div className={`${styles.radian_left}`}></div>
                  <div className={`${styles.radian_right}`}></div>
                </div>
              </div>
            ) : null}
          </div>
        )
      )}
    </>
  );
};
