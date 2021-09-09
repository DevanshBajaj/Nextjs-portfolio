import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import NextNprogress from "nextjs-progressbar";

function App({ Component, pageProps }) {
	return (
		<ThemeProvider
			themes={["pink", "red", "blue", "light", "dark"]}
			forcedTheme={Component.theme || undefined}
		>
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
