import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/_variable.scss";
import "../assets/css/_spacing.scss";
import "../assets/css/_mixing.scss";
import "../assets/css/_fonts.scss";
import "../assets/css/_headings.scss";
import "../assets/css/_buttons.scss";
import "../components/Layout/Header/header.scss";
import "../components/Button/button.scss";
import { SSRProvider } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import Metaverse from '../components/Metaverse/Metaverse'

function MyApp({ Component, pageProps, coinsData }) {
  return (
    <SSRProvider>
      <Toaster />
      <Layout coinsData={coinsData}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>

  
  );
}

export default MyApp;
MyApp.getInitialProps = async () => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?ids=nitro-league&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const coinsData = await res.json();
    return {
      coinsData,
    };
  } catch (err) {
    console.log(err);
    return {};
  }
};
