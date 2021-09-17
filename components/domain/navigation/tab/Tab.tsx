import styles from "./Tab.module.css";
import { TabNumber } from "../../../../models";
import { excludeNumberArray } from "../../../../utils";
import { TabService } from "../../../../services";
import * as React from "react";
import Link from "next/link";

interface Props {
  selectedTabNumber: TabNumber;
  deletedTabAry: TabNumber[];
  onClickTab: (tabNumber: TabNumber) => void;
  onClickDeleteTab: (nextDeletedTabAry: TabNumber[]) => void;
}

export const Tab: React.FC<Props> = ({ selectedTabNumber, deletedTabAry, onClickTab, onClickDeleteTab }) => {
  const FIRST = 0;
  const tabList = ["Home", "Skills", "Works"];

  const handleClickTab = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      onClickTab(Number.parseInt(e.currentTarget.dataset.id, 10) as TabNumber);
    },
    [onClickTab]
  );

  const handleClickDeleteButton = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.stopPropagation();
      const targetTabNumber = Number.parseInt(e.currentTarget.dataset.id, 10) as TabNumber;
      const nextDeletedAry = [...deletedTabAry, targetTabNumber];
      // 削除するタブを追加
      onClickDeleteTab(nextDeletedAry);

      // 削除されたタブがselectedだった場合、次に selected にするタブを求める
      const tabNumberAry = TabService.makeTabNumberAry(tabList);
      const currentTabAry = excludeNumberArray(tabNumberAry, nextDeletedAry) as TabNumber[];
      if (selectedTabNumber === targetTabNumber && currentTabAry.length !== 0 && currentTabAry.length !== 1) {
        const nextSetTabNumber = TabService.selectNextTab(currentTabAry, targetTabNumber);
        onClickTab(nextSetTabNumber);
      } else if (currentTabAry.length === 1) {
        onClickTab(currentTabAry[FIRST]);
      }
    },
    [deletedTabAry, onClickTab, onClickDeleteTab]
  );

  return (
    <>
      {tabList.map((t, index) =>
        deletedTabAry.includes(index as TabNumber) ? null : (
          <div
            key={index}
            className={selectedTabNumber === index ? `${styles.tab}` : `${styles.tab}`}
            role="tab"
            aria-selected={selectedTabNumber === index ? "true" : "false"}
          >
            <div data-id={index} className={`${styles.tab_content}`} onClick={handleClickTab}>
              {/* TODO: URL同期させる */}
              <a className={`${styles.content_text}`}>{t}</a>
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
