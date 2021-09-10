import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import NextNprogress from "nextjs-progressbar";
import Head from "next/head";

function App({ Component, pageProps }) {
	return (
		<ThemeProvider
			themes={["dark", "light", "nord", "blue"]}
			forcedTheme={Component.theme || undefined}
			defaultTheme="blue"
		>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
				/>
			</Head>
			<NextNprogress
				color="var(--theme-accent)"
				startPosition={0.3}
				stopDelayMs={200}
				height={4}
				showOnShallow={true}
				options={{ easing: "ease", speed: 500, showSpinner: false }}
			/>
			<div className="container">
				<AnimatePresence
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<Component {...pageProps} />
				</AnimatePresence>
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
