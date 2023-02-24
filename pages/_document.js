import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w, d, s, l, i) {
		w[l] = w[l] || [],
		w[l].push({
			"gtm.start": new Date().getTime(),
			event: "gtm.js"
		})
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != "dataLayer" ? "&l=" + l : "";
		j.async = true;
		j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
		f.parentNode.insertBefore(j, f);
	})
    (window, document, "script", "dataLayer", "GTM-MCCRWS5");`,
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            title="Google tag manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCCRWS5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
