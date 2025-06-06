/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'placekitten.com', 'images.unsplash.com', 'imgur.com', 'i.imgur.com'],
  },
});
