import styles from "./index.module.css";
import { NextPage } from "next";
import { Browser } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <div className={`${styles.screen} w-screen h-screen`}>
        <Browser />
      </div>
    </>
  );
};

export default Home;
