const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	pwa: {
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/],
		mode: "production",
		register: true,
		sw: "service-worker.js",
		dest: "public",
	},
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"],
	},
});
