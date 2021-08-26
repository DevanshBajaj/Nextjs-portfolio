import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({}) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<>
			{theme !== undefined && (
				<select
					className={styles.themeselect}
					value={theme}
					onChange={(e) => setTheme(e.target.value)}
				>
					<option value="system">System</option>
					<option value="dark">Dark</option>
					<option value="light">Light</option>
					<option value="nord">Nord</option>
					<option value="blue">Blueish</option>
				</select>
			)}
		</>
	);
};

export default Navbar;
