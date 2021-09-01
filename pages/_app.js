import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
	return (
		<ThemeProvider
			themes={["pink", "red", "blue", "light", "dark"]}
			forcedTheme={Component.theme || undefined}
		>
			<div className="container">
				<Navbar />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}

export default App;
