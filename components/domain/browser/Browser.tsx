import styles from "./Browser.module.css";
import { useHidden } from "../../../hooks";
import { NavButton } from "../navigation/button/NavButton";
import * as React from "react";

export const Browser: React.FC = () => {
  const DELETE = "delete";
  const MINIMIZE = "minimize";
  const MAXIMIZE = "maximize";

  const hiddenBrowserComponent = useHidden(false);

  const handleClickDeleteButton = React.useCallback((): void => {
    hiddenBrowserComponent.doHidden();
  }, [hiddenBrowserComponent]);

  // 今は delete と同じ処理だが、後のために分けておく
  const handleClickMinimizeButton = React.useCallback((): void => {
    hiddenBrowserComponent.doHidden();
  }, [hiddenBrowserComponent]);

  return hiddenBrowserComponent.isHidden ? (
    <></>
  ) : (
    <div className="w-full h-full flex items-center">
      <div className={`bg-gray-200 ${styles.size_lap} rounded-lg shadow-lg md: container md:${styles.size_mob}`}>
        <NavButton type={DELETE} onClickDeleteButton={handleClickDeleteButton} />
        <NavButton type={MINIMIZE} onClickMinimizeButton={handleClickMinimizeButton} />
      </div>
    </div>
  );
};
