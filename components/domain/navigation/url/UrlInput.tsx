import styles from "./UrlInput.module.css";
import { TabNumber } from "../../../../models";
import { useRouter } from "next/router";
import * as React from "react";

interface Props {
  onClickTab: (tabNumber: TabNumber) => void;
}

export const UrlInput: React.FC<Props> = () => {
  const MY_URL = "yamawo.info";
  const router = useRouter();

  const path = router.pathname === "/" ? MY_URL : `${MY_URL}${router.pathname}`;

  const handleFocusInput = React.useCallback((e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.select();
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        const url = e.currentTarget.value;
        const targetUrl = url.substr(url.lastIndexOf("/") + 1);
        console.log(targetUrl);
        if (targetUrl === MY_URL) return;
        router.push(`/${targetUrl}`);
      }
    },
    [router]
  );

  return (
    <input
      className={`${styles.url_input}`}
      type="text"
      defaultValue={path}
      onFocus={handleFocusInput}
      onKeyDown={handleKeyDown}
    />
  );
};
