// /pages/app.js

import App from "next/app";
// /pages/app.js

// At the top of _app.js
import Cookies from "universal-cookie";
// import consts from "consts";

import consts from "../../consts";

// In the getInitialProps function, instead of our 'random' protection
const cookies = new Cookies(useContext.ctx.req.headers.cookie);
const password = cookies.get(consts.SiteReadCookie) ?? "";

if (password === "nitro") {
  appProps.pageProps.hasReadPermission = true;
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (useContext) => {
  const appProps = await App.getInitialProps(useContext);

  if (Math.random() > 0.5) {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp;
