import styles from "./Browser.module.css";
import { useHidden } from "../../../hooks";
import { TabNumber } from "../../../models";
import { BookMarkIcon, HistoryButton, NavButton, Tab, UrlInput, Content } from "..";
import * as React from "react";

export const Browser: React.FC = () => {
  const DELETE = "delete" as const;
  const MINIMIZE = "minimize" as const;
  const MAXIMIZE = "maximize" as const;
  const TAB_LIST_LENGTH = 3;

  const commonBrowserStyle = `bg-gray-200 rounded-lg shadow-lg -my-0 mx-auto`;

  const [selectedTabNumber, setSelectedTabNuber] = React.useState<TabNumber>(0);
  const [isMaximize, setIsMaximize] = React.useState<boolean>(false);
  const [deletedTabAry, setDeletedTabAry] = React.useState<TabNumber[]>([]);
  const hiddenBrowserComponent = useHidden(false);

  const handleClickDeleteButton = React.useCallback((): void => {
    hiddenBrowserComponent.doHidden();
  }, [hiddenBrowserComponent]);

  // 今は delete と同じ処理だが、後のために分けておく
  const handleClickMinimizeButton = React.useCallback((): void => {
    hiddenBrowserComponent.doHidden();
  }, [hiddenBrowserComponent]);

  const handleClickMaximizeButton = React.useCallback((): void => {
    setIsMaximize(!isMaximize);
  }, [isMaximize]);

  const handleClickTab = React.useCallback(
    (tabNumber: TabNumber): void => {
      setSelectedTabNuber(tabNumber);
    },
    [selectedTabNumber]
  );

  const handleClickDeleteTabButton = React.useCallback(
    (nextDeletedTabAry: TabNumber[]): void => {
      setDeletedTabAry(nextDeletedTabAry);
    },
    [deletedTabAry]
  );

  return hiddenBrowserComponent.isHidden || deletedTabAry.length === TAB_LIST_LENGTH ? (
    <></>
  ) : (
    <div className="w-full h-full flex items-center">
      <div
        className={
          isMaximize
            ? `${styles.full_screen} ${commonBrowserStyle}`
            : `${commonBrowserStyle} ${styles.size_lap} md:${styles.size_mob}`
        }
      >
        <div className={`w-full h-28`}>
          <div className={`w-full h-10 flex bg-gray-300 rounded-t-lg`}>
            <div className={`${styles.nav_button}`}>
              <NavButton type={DELETE} onClickDeleteButton={handleClickDeleteButton} />
              <NavButton type={MINIMIZE} onClickMinimizeButton={handleClickMinimizeButton} />
              <NavButton type={MAXIMIZE} onClickMaximizeButton={handleClickMaximizeButton} />
            </div>
            <div className={`flex justify-start`}>
              <Tab
                selectedTabNumber={selectedTabNumber}
                deletedTabAry={deletedTabAry}
                onClickTab={handleClickTab}
                onClickDeleteTab={handleClickDeleteTabButton}
              />
            </div>
          </div>
          <div className={`w-full h-10 flex items-center`}>
            <HistoryButton />
            <UrlInput onClickTab={handleClickTab} />
          </div>
          <div className={`${styles.book_mark}`}>
            <BookMarkIcon />
          </div>
        </div>
        <div className={isMaximize ? `${styles.content_full}` : `${styles.content}`}>
          <Content selectedTabNumber={selectedTabNumber} isMaximize={isMaximize} />
        </div>
      </div>
    </div>
  );
};
