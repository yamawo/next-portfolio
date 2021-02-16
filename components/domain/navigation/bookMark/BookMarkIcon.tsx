import styles from "./BookMarkIcon.module.css";
import Image from "next/image";
import * as React from "react";

export const BookMarkIcon: React.FC = () => {
  const IMAGE_WIDTH = 14;
  const IMAGE_HEIGHT = 14;
  const GITHUB_URL = "https://github.com/yamawo";
  const GMAIL_URL = "mailto:y7a3m1asaki@gmail.com";
  const bookMarkList = ["GitHub", "Gmail"];
  const urlList = [GITHUB_URL, GMAIL_URL];

  return (
    <>
      {bookMarkList.map((c, index) => (
        <a key={index} href={urlList[index]} target="_blank" rel="noopener noreferrer">
          <button className={`${styles.book_mark_button}`}>
            <Image
              className={`${styles.book_mark_img}`}
              src={`/assets/pngs/${c.toLowerCase()}_icon.png`}
              alt={`${c}`}
              width={`${IMAGE_WIDTH}`}
              height={`${IMAGE_HEIGHT}`}
            />
            <p className={`${styles.book_mark_text}`}>{c}</p>
          </button>
        </a>
      ))}
    </>
  );
};
