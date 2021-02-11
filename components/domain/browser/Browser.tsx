import styles from "./Browser.module.css";

import * as React from "react";

export const Browser: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div className={`bg-gray-200 ${styles.size_lap} rounded-lg shadow-lg md: container md:${styles.size_mob}`}></div>
    </div>
  );
};
