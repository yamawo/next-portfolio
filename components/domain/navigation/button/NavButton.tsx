import * as React from "react";

interface Props {
  type: "delete" | "minimize" | "maximize";
  onClickDeleteButton?: () => void;
  onClickMinimizeButton?: () => void;
}

export const NavButton: React.FC<Props> = ({ type, onClickDeleteButton, onClickMinimizeButton }) => {
  const handleClickDelete = React.useCallback(() => {
    onClickDeleteButton();
  }, [onClickDeleteButton]);

  const handleClickMinimize = React.useCallback(() => {
    onClickMinimizeButton();
  }, [onClickMinimizeButton]);

  return (
    <>
      {type === "delete" ? <button onClick={handleClickDelete}>x</button> : null}
      {type === "minimize" ? <button onClick={handleClickMinimize}>-</button> : null}
      {type === "maximize" ? <button></button> : null}
    </>
  );
};
