import "../styles/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const buildTitle = (): string => {
    const pathName = router.pathname;
    switch (pathName) {
      case "/":
        return "portfolio";
      case "/home":
        return "HOME | portfolio";
      case "/skills":
        return "SKILLS | portfolio";
      case "/works":
        return "WORKS | portfolio";
      default:
        return "portfolio";
    }
  };

  return (
    <>
      <Head>
        <title>{buildTitle()}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
