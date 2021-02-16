import styles from "./HistoryButton.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";

export const HistoryButton: React.FC = () => {
  const ARROW_IMAGE_WIDTH = 16;
  const ARROW_IMAGE_HEIGHT = 16;
  const RELOAD_IMAGE_WIDTH = 14;
  const RELOAD_IMAGE_HEIGHT = 14;

  const router = useRouter();

  const handleClickBrowserback = React.useCallback((): void => {
    router.back();
  }, [router]);

  const handleClickBrowserForward = React.useCallback((): void => {
    history.forward();
  }, []);

  const handleClickReload = React.useCallback((): void => {
    router.reload();
  }, [router]);

  return (
    <div className={`${styles.history_button_container}`}>
      <button className={`${styles.history_button}`} onClick={handleClickBrowserback}>
        <Image
          className={`${styles.arrow_button}`}
          src="/assets/pngs/arrow_left_icon.png"
          alt="arrow_left"
          width={`${ARROW_IMAGE_WIDTH}`}
          height={`${ARROW_IMAGE_HEIGHT}`}
        />
      </button>
      <button className={`${styles.history_button}`} onClick={handleClickBrowserForward}>
        <Image
          className={`${styles.arrow_button}`}
          src="/assets/pngs/arrow_right_icon.png"
          alt="arrow_right"
          width={`${ARROW_IMAGE_WIDTH}`}
          height={`${ARROW_IMAGE_HEIGHT}`}
        />
      </button>
      <button className={`${styles.history_button} last:mr-1`} onClick={handleClickReload}>
        <Image
          className={`${styles.reload_button}`}
          src="/assets/pngs/reload_icon.png"
          alt="reload"
          width={`${RELOAD_IMAGE_WIDTH}`}
          height={`${RELOAD_IMAGE_HEIGHT}`}
        />
      </button>
    </div>
  );
};
