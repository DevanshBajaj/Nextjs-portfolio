import React from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import NavLink from "./NavLink";
import { useOnClickOutside } from "./hooks";

const StyledBurger = styled.button`
	display: none;
	flex-direction: column;
	justify-content: space-around;
	width: 1.6rem;
	height: 1.6rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 11;
	@media (max-width: 700px) {
		display: flex;
	}
	&:focus {
		outline: none;
	}

	div {
		width: 1.7rem;
		height: 2px;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		background: var(--theme-accent);

		:first-child {
			transform: ${({ open }) => (open ? "rotate(42deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-42deg)" : "rotate(0)")};
		}
	}
`;

const Wrapper = styled.div`
	font-weight: 600;
	@media (max-width: 700px) {
	}
`;

const Nav = styled.section`
	display: flex;
	padding: 0 1rem;
	justify-content: space-between;
	align-items: center;
`;

const LeftPart = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	-webkit-tap-highlight-color: transparent;
	@media (max-width: 700px) {
		display: none;
	}
`;

const RightPart = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
`;

const StyledMenu = styled.nav`
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	z-index: 10;
	background: var(--theme-bg);
	height: 42vh;
	padding: 1.2rem;
	position: absolute;
	top: 0.6rem;
	left: 0;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	transition: transform 0.3s ease-in-out;

	@media (max-width: 700px) {
		width: 100%;
		display: flex;
	}

	@media (max-height: 700px) {
		top: 1.2rem;
		height: 45vh;
	}
	
	a {
		font-size: 0.8rem;
		text-transform: uppercase;
		color: var(--theme-accent)
		text-decoration: none;
		margin: 0.4rem 0.6rem;
		transition: color 0.3s linear;
		&:hover {
			color: var(--theme-accent)
		}
	}
`;

const Navbar = ({}) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const node = React.useRef();
	useOnClickOutside(node, () => setOpen(false));

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const handleToggle = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div ref={node}>
			<Wrapper>
				<Nav>
					<StyledBurger open={open} onClick={handleToggle} aria-label="menu">
						<div />
						<div style={{ width: "1.2rem" }} />
						<div />
					</StyledBurger>
					<LeftPart>
						<header className={styles.header}>
							<NavLink href="/">
								<a>Home</a>
							</NavLink>
							<NavLink href="/blog">
								<a>Blog</a>
							</NavLink>
							<NavLink href="/projects">
								<a>Projects</a>
							</NavLink>
							<a
								href="https://raw.githubusercontent.com/DevanshBajaj/OLD_portfolio/master/devanshResume.pdf"
								rel="noreferrer"
								target="_blank"
							>
								Resume
							</a>
						</header>
					</LeftPart>
					<RightPart>
						{theme !== undefined && (
							<div className={styles.select_wrapper}>
								<select
									className={styles.themeselect}
									value={theme}
									onChange={(e) => setTheme(e.target.value)}
								>
									<option value="system">System</option>
									<option value="dark">Dark</option>
									<option value="light">Light</option>
									<option value="nord">Nord</option>
									<option value="blue">Blue</option>
								</select>
							</div>
						)}
					</RightPart>
				</Nav>
				<StyledMenu open={open}>
					<NavLink href="/">
						<a>Home</a>
					</NavLink>
					<NavLink href="/blog">
						<a>Blog</a>
					</NavLink>
					<NavLink href="/projects">
						<a>Projects</a>
					</NavLink>
					<a
						href="https://raw.githubusercontent.com/DevanshBajaj/OLD_portfolio/master/devanshResume.pdf"
						rel="noreferrer"
						target="_blank"
					>
						Resume
					</a>
				</StyledMenu>
			</Wrapper>
		</div>
	);
};

export default Navbar;
