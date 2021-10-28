
const withPWA = require("next-pwa");


module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["www.google.co.uk"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  }
});
