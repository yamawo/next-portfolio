import styles from "./Tab.module.css";
import { TabNumber } from "../../../../models";
import { excludeNumberArray } from "../../../../utils";
import { TabService } from "../../../../services";
import * as React from "react";
import Link from "next/link";

interface Props {
  selectedTabNumber: TabNumber;
  onClickTab: (number) => void;
}

export const Tab: React.FC<Props> = ({ selectedTabNumber, onClickTab }) => {
  const FIRST = 0;
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
      e.stopPropagation();
      const targetTabNumber = Number.parseInt(e.currentTarget.dataset.id, 10);
      const nextDeletedAry = [...deletedAry, targetTabNumber];
      // 削除するタブを追加
      setDeletedAry(nextDeletedAry);

      // 削除されたタブがselectedだった場合、次に selected にするタブを求める
      const tabNumberAry = TabService.makeTabNumberAry(tabList);
      const currentTabAry = excludeNumberArray(tabNumberAry, nextDeletedAry);
      if (selectedTabNumber === targetTabNumber && currentTabAry.length !== 0 && currentTabAry.length !== 1) {
        const nextSetTabNumber = TabService.selectNextTab(currentTabAry, targetTabNumber, tabList);
        onClickTab(nextSetTabNumber);
      } else if (currentTabAry.length === 1) {
        onClickTab(currentTabAry[FIRST]);
      }
    },
    [deletedAry, onClickTab]
  );

  return (
    <>
      {tabList.map((t, index) =>
        deletedAry.includes(index) ? null : (
          <div
            key={index}
            className={selectedTabNumber === index ? `${styles.selected} ${styles.tab}` : `${styles.tab}`}
          >
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
