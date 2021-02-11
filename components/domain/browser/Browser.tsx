import styles from "./Browser.module.css";

import * as React from "react";

export const Browser: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div
        className={`container bg-gray-200 my-0 mx-auto ${styles.height_lap} rounded-lg shadow-lg md:${styles.height_mob} md:rounded-md`}
      ></div>
    </div>
  );
};
