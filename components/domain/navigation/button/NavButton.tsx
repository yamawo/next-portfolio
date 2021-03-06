import styles from "./NavButton.module.css";
import * as React from "react";

interface Props {
  type: "delete" | "minimize" | "maximize";
  onClickDeleteButton?: () => void;
  onClickMinimizeButton?: () => void;
  onClickMaximizeButton?: () => void;
}

export const NavButton: React.FC<Props> = ({
  type,
  onClickDeleteButton,
  onClickMaximizeButton,
  onClickMinimizeButton,
}) => {
  const handleClickDelete = React.useCallback(() => {
    onClickDeleteButton();
  }, [onClickDeleteButton]);

  const handleClickMinimize = React.useCallback(() => {
    onClickMinimizeButton();
  }, [onClickMinimizeButton]);

  const handleClickMaximize = React.useCallback(() => {
    onClickMaximizeButton();
  }, [onClickMaximizeButton]);

  return (
    <>
      {type === "delete" ? (
        <button className={`bg-red-500 first:ml-4  ${styles.circle_button}`} onClick={handleClickDelete} />
      ) : null}
      {type === "minimize" ? (
        <button className={`bg-yellow-500 ${styles.circle_button}`} onClick={handleClickMinimize} />
      ) : null}
      {type === "maximize" ? (
        <button className={`bg-green-500 last:mr-4 ${styles.circle_button}`} onClick={handleClickMaximize} />
      ) : null}
    </>
  );
};
