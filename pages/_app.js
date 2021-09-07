import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";

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
			<Footer />
		</ThemeProvider>
	);
}

export default App;
