/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  async redirects() {
    return [
      {
        source: "/astro-cars",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/land",
        destination: "/",
        permanent: true,
      },
      {
        source: "/roadmap",
        destination: "/",
        permanent: true,
      },
      {
        source: "/marketplace",
        destination: "/",
        permanent: true,
      },
      {
        source: "/download-app.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Terms&Conditions",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// };
// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   reactStrictMode: true,
// };
pageExtensions: ["html", "jsx", "js", "tsx", "ts"];
