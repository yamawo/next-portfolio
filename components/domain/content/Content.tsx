import styles from "./Content.module.css";
import { TabNumber } from "../../../models";
import Image from "next/image";
import { ContentService } from "../../../services";

interface Props {
  selectedTabNumber: TabNumber;
  isMaximize: boolean;
}

export const Content: React.FC<Props> = ({ selectedTabNumber, isMaximize }) => {
  const HOME_TAB_NUMBER = 0;
  const SKILLS_TAB_NUMBER = 1;
  const WORKS_TAB_NUMBER = 2;
  const IMAGE_WIDTH = 171;
  const IMAGE_HEIGHT = 228;
  const BIRTH_YEAR = 1995;

  return (
    <>
      {selectedTabNumber === HOME_TAB_NUMBER ? (
        <div className={isMaximize ? `${styles.content_container_full}` : `${styles.content_container}`}>
          {/* TODO: tailwindのデフォルト設定から変える */}
          <h2 className={`${styles.headline}`}># Profile</h2>
          <div className={`${styles.profile}`}>
            <div className={`w-1/4`}>
              <Image
                className={`rounded-2xl`}
                src={`/assets/svgs/yamawo_image.svg`}
                alt={"yamawo"}
                width={`${IMAGE_WIDTH}`}
                height={`${IMAGE_HEIGHT}`}
              />
            </div>
            <div>
              <dl className={`mt-2`}>
                <dt className={`${styles.profile_title}`}>## 誕生年 / 年齢</dt>
                <dd className={`${styles.profile_text}`}>{`- ${BIRTH_YEAR} / ${ContentService.getAge()}`}</dd>
              </dl>
              <dl className={`mt-2`}>
                <dt className={`${styles.profile_title}`}>## 居住地</dt>
                <dd className={`${styles.profile_text}`}>{`- 東京都目黒区`}</dd>
              </dl>
              <dl className={`mt-2`}>
                <dt className={`${styles.profile_title}`}>## 趣味</dt>
                <dd className={`${styles.profile_text}`}>{`- 海外サッカー試合観戦・分析`}</dd>
                <dd className={`${styles.profile_text}`}>{`- 読書(技術, 自己啓発)`}</dd>
                <dd className={`${styles.profile_text}`}>{`- ゲーム(FIFA, パワプロ, APEX)`}</dd>
                <dd className={`${styles.profile_text}`}>{`- ヨガ`}</dd>
              </dl>
            </div>
          </div>
          <h2 className={`${styles.headline}`}># About Me</h2>
          <div>
            <p className={`${styles.about_text}`}>
              大学卒業後、電力系列の会社で一般電力設備の保守点検に関する営業を担当していました。
              <br />
              2019年8月よりプログラミングスクールにて基礎的な開発スキルを得た後、2020年2月よりWebエンジニアへ転身。
              <br />
              SPAの設計・開発・テストをフロントとバック両面から携わっています。
            </p>
          </div>
        </div>
      ) : null}
      {selectedTabNumber === SKILLS_TAB_NUMBER ? (
        <div className={isMaximize ? `${styles.content_container_full}` : `${styles.content_container}`}>
          <h2 className={`${styles.headline}`}># Skill Set</h2>
          <div className={`${styles.skill}`}>
            <div>
              <dl className={`mt-2`}>
                <dt className={`${styles.skill_title}`}>## Front End</dt>
                <dd
                  className={`${styles.skill_text}`}
                >{`SCSS / tailwind / CSS Modules / TypeScript / Vue.js / React / Next.js / Jest / CodeceptJS`}</dd>
              </dl>
              <dl className={`mt-2`}>
                <dt className={`${styles.skill_title}`}>## Back End</dt>
                <dd className={`${styles.skill_text}`}>{`Ruby / RubyonRails / Java / Spring Boot`}</dd>
              </dl>
              <dl className={`mt-2`}>
                <dt className={`${styles.skill_title}`}>## Others</dt>
                <dd className={`${styles.skill_item}`}>{`frontend /`}</dd>
                <dd className={`${styles.skill_text}`}>{`- MobX / Recoil`}</dd>
                <dd className={`${styles.skill_item}`}>{`backend /`}</dd>
                <dd className={`${styles.skill_text}`}>{`- Doma`}</dd>
                <dd className={`${styles.skill_item}`}>{`DB /`}</dd>
                <dd className={`${styles.skill_text}`}>{`- PostgreSQL / MySQL`}</dd>
              </dl>
            </div>
          </div>
        </div>
      ) : null}
      {selectedTabNumber === WORKS_TAB_NUMBER ? (
        <div className={isMaximize ? `${styles.content_container_full}` : `${styles.content_container}`}>
          <h2 className={`${styles.headline}`}># Portfolio</h2>
          <div className={`${styles.skill}`}>
            <div>
              <dl className={`mt-2`}>
                <dt className={`${styles.work_title}`}>
                  <a
                    href="https://github.com/yamawo/next-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{`next-portfolio`}</a>
                </dt>
                <dd className={`${styles.work_text}`}>
                  {
                    "-> このサイトのリポジトリです。これからもエンハンスを続ける予定で、直近はブラウザの移動を出来る様にすることを予定しています。"
                  }
                </dd>
              </dl>
            </div>
          </div>
          <h2 className={`${styles.headline}`}># OSS Contribute</h2>
          <dl className={`mt-2`}>
            <dd className={`${styles.work_text}`}>{"直近成し遂げる目標に置いています。"}</dd>
          </dl>
        </div>
      ) : null}
    </>
  );
};
