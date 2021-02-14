import styles from "./Browser.module.css";
import { useHidden } from "../../../hooks";
import { NavButton } from "../navigation/button/NavButton";
import * as React from "react";

export const Browser: React.FC = () => {
  const DELETE = "delete";
  const MINIMIZE = "minimize";
  const MAXIMIZE = "maximize";

  const commonBrowserStyle = `bg-gray-200 rounded-lg shadow-lg -my-0 mx-auto`;

  const [selectedTabNumber, setSelectedTabNuber] = React.useState<number>(1);
  const [isMaximize, setIsMaximize] = React.useState<boolean>(false);
  const hiddenBrowserComponent = useHidden(false);

  const handleClickDeleteButton = React.useCallback((): void => {
    hiddenBrowserComponent.doHidden();
  }, [hiddenBrowserComponent]);

  // 今は delete と同じ処理だが、後のために分けておく
  const handleClickMinimizeButton = React.useCallback((): void => {
    hiddenBrowserComponent.doHidden();
  }, [hiddenBrowserComponent]);

  const handleClickMaximizeButton = React.useCallback(() => {
    setIsMaximize(!isMaximize);
  }, [isMaximize]);

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
        <div className={`w-full h-10 flex bg-gray-300 rounded-lg`}>
          <div>
            <NavButton type={DELETE} onClickDeleteButton={handleClickDeleteButton} />
            <NavButton type={MINIMIZE} onClickMinimizeButton={handleClickMinimizeButton} />
            <NavButton type={MAXIMIZE} onClickMaximizeButton={handleClickMaximizeButton} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
