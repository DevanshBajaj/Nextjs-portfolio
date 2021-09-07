import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import Navbar from "./Navbar";

const name = "Devansh Bajaj";
export const siteTitle = "Devansh Bajaj";

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, home }) => {
	return (
		<>
			<Navbar />
			<motion.main
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ type: "linear" }}
			>
				<div className={styles.container}>
					<Head>
						<link rel="icon" href="/favicon.ico" />
						<meta name="description" content="My Personal Website" />
						<meta
							property="og:image"
							content={`https://og-image.vercel.app/${encodeURI(
								siteTitle
							)}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
						/>
						<meta name="og:title" content={siteTitle} />
						<meta name="twitter:card" content="summary_large_image" />
					</Head>
					<header className={styles.header}>
						{home ? (
							<>
								<>
									<div className={styles.profileimg}>
										<Image
											priority
											src="/images/profile.png"
											height={144}
											width={144}
											className={styles.profileimg}
											alt={name}
										/>
									</div>
								</>
								<a className={utilStyles.headingMd}>Hello, My name is</a>{" "}
								<a></a>
								<h1 className={utilStyles.heading2Xl}>
									Devansh Bajaj <a>.</a> 👋
								</h1>
								<div className={styles.logowrapper}>
									<a href="https://github.com/DevanshBajaj" target="github">
										<FaGithub />
									</a>
									<a
										href="https://www.linkedin.com/in/devansh21db/"
										target="linkedin"
									>
										<FaLinkedin />
									</a>
									<a href="https://twitter.com/devansh21db" target="twitter">
										<FaTwitter />
									</a>
									<a href="https://dribbble.com/devanshbajaj" target="dribble">
										<FaDribbble />
									</a>
								</div>
							</>
						) : (
							<></>
						)}
					</header>
					<main>{children}</main>
					{!home && (
						<div className={styles.backToHome}>
							<Link href="/">
								<a>← Back to home</a>
							</Link>
						</div>
					)}
				</div>
			</motion.main>
		</>
	);
};

export default Layout;
