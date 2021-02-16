import styles from "./Browser.module.css";
import { useHidden } from "../../../hooks";
import { NavButton } from "../navigation/button/NavButton";
import { Tab } from "../navigation/tab/Tab";
import { TabNumber } from "../../../models";
import * as React from "react";
import { HistoryButton } from "../navigation/button/HistoryButton";
import { UrlInput } from "../navigation/url/UrlInput";

export const Browser: React.FC = () => {
  const DELETE = "delete";
  const MINIMIZE = "minimize";
  const MAXIMIZE = "maximize";

  const commonBrowserStyle = `bg-gray-200 rounded-lg shadow-lg -my-0 mx-auto`;

  const [selectedTabNumber, setSelectedTabNuber] = React.useState<TabNumber>(0);
  const [isMaximize, setIsMaximize] = React.useState<boolean>(false);
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

  return hiddenBrowserComponent.isHidden ? (
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
        <div className={`w-full h-10 flex bg-gray-300 rounded-t-lg`}>
          <div className={`${styles.nav_button}`}>
            <NavButton type={DELETE} onClickDeleteButton={handleClickDeleteButton} />
            <NavButton type={MINIMIZE} onClickMinimizeButton={handleClickMinimizeButton} />
            <NavButton type={MAXIMIZE} onClickMaximizeButton={handleClickMaximizeButton} />
          </div>
          <div className={`flex justify-start`}>
            <Tab selectedTabNumber={selectedTabNumber} onClickTab={handleClickTab} />
          </div>
        </div>
        <div className={`w-full h-10 flex items-center`}>
          <HistoryButton />
        </div>
        <div>
          <UrlInput />
        </div>
      </div>
    </div>
  );
};
