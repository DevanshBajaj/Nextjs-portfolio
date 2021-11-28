const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
		register: true,
		skipWaiting: true,
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/]
	},
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"],
	},
});
