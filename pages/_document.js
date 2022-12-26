import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="application-name" content="Devansh Bajaj" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content="Devansh Bajaj" />
					<meta name="description" content="Devansh Bajaj" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#000000" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap"
						rel="stylesheet"
					></link>
					<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/icons/apple-touch-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/icons/apple-touch-icon-180x180.png"
					/>
					<link rel="me" href="https://hachyderm.io/@devanshbajaj"/>
					<link
						rel="apple-touch-icon"
						sizes="167x167"
						href="/icons/apple-touch-icon-152x152.png"
					/>

					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link
						rel="mask-icon"
						href="/icons/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<link rel="shortcut icon" href="/favicon.ico" />
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_2048.png"
						sizes="2048x2732"
					/>
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_1668.png"
						sizes="1668x2224"
					/>
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_1536.png"
						sizes="1536x2048"
					/>
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_1125.png"
						sizes="1125x2436"
					/>
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_1242.png"
						sizes="1242x2208"
					/>
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_750.png"
						sizes="750x1334"
					/>
					<link
						rel="apple-touch-startup-image"
						href="/images/apple_splash_640.png"
						sizes="640x1136"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
