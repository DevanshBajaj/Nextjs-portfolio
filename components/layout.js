import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import profileimg from "../images/profile.png";

const name = "Devansh Bajaj";
const siteTitle = "Devansh Bajaj";

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
											src={profileimg}
											height={144}
											width={144}
											alt={name}
										/>
									</div>
								</>
								<p
									className={`${utilStyles.headingMd} ${utilStyles.accentLink}`}
								>
									Hello, My name is
								</p>
								<h1 className={utilStyles.heading2Xl}>
									Devansh Bajaj <span className={utilStyles.accentLink}>.</span>{" "}
									👋
								</h1>
								<div className={styles.logowrapper}>
									<a
										href="https://github.com/DevanshBajaj"
										target="github"
										aria-label="Github"
									>
										<FaGithub />
									</a>
									<a
										href="https://www.linkedin.com/in/devansh21db/"
										target="linkedin"
										aria-label="LinkedIn"
									>
										<FaLinkedin />
									</a>
									<a
										href="https://twitter.com/devansh21db"
										target="twitter"
										aria-label="Twitter"
									>
										<FaTwitter />
									</a>
									<a
										href="https://dribbble.com/devanshbajaj"
										target="dribble"
										aria-label="Dribble"
									>
										<FaDribbble />
									</a>
								</div>
							</>
						) : (
							<></>
						)}
					</header>
					<main>{children}</main>
				</div>
			</motion.main>
		</>
	);
};

export default Layout;
