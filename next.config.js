const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		register: true,
		sw: "service-worker.js",
		dest: "public",
	},
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"],
	},
});
