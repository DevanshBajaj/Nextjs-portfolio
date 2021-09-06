import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({}) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<Link href="/projects">
					<a>Projects</a>
				</Link>
				<Link href="/uses">
					<a>Uses</a>
				</Link>
			</header>
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
		</div>
	);
};

export default Navbar;
