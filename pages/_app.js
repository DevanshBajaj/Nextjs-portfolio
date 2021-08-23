import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
	return (
		<ThemeProvider forcedTheme={Component.theme || undefined}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
