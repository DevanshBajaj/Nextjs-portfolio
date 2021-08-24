import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = ({}) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<>
			{theme !== undefined && (
				<div value={theme} onChange={(e) => setTheme(e.target.value)}>
					<button onClick={() => setTheme("system")}>System</button>
					<button onClick={() => setTheme("dark")}>Dark</button>
					<button onClick={() => setTheme("light")}>Light</button>
				</div>
			)}
		</>
	);
};

export default Navbar;
