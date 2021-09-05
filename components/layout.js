import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const name = "Devansh Bajaj";
export const siteTitle = "Blog Website";

const Layout = ({ children, home }) => {
	return (
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
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
						<div className={utilStyles.logowrapper}>
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
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
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
	);
};

export default Layout;
