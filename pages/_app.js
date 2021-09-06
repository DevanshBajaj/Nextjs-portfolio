import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps }) {
	return (
		<ThemeProvider
			themes={["pink", "red", "blue", "light", "dark"]}
			forcedTheme={Component.theme || undefined}
		>
			<div className="container">
				<AnimatePresence
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<Component {...pageProps} />
				</AnimatePresence>
			</div>
		</ThemeProvider>
	);
}

export default App;
