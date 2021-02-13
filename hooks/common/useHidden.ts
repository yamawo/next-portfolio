import * as React from "react";

/**
 * hiddenの状態を管理するカスタムフック
 * @param initValue 初期値
 */
export const useHidden = (
  initValue: boolean
): {
  isHidden: boolean;
  doDisplay: () => void;
  doHidden: () => void;
} => {
  const [isHidden, setIsHidden] = React.useState(initValue);

  const doDisplay = React.useCallback(() => {
    setIsHidden(false);
  }, []);

  const doHidden = React.useCallback(() => {
    setIsHidden(true);
  }, []);

  return {
    isHidden,
    doDisplay,
    doHidden,
  };
};
