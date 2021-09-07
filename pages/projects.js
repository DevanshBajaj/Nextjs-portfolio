import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Head from "next/head";
import Layout from "../components/layout";

export const siteTitle = "Projects";

const projects = () => {
	return (
		<Layout>
			<div className={styles.pagescontainer}>
				<Head>
					<title>Projects</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Projects" />
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle
						)}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<section>
					<h2 className={utilStyles.heading1Xl}>
						Projects<a className={utilStyles.accentLink}>.</a>
					</h2>
					<div>
						<ul className={utilStyles.list}>
							<li className={utilStyles.listItem}>
								<p
									className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}
								>
									Pokedex
								</p>
								<a
									href="https://pokedex.devanshbajaj.dev/"
									target="pokedex"
									className={utilStyles.headingSmAccent}
								>
									Live Demo
								</a>
								<p className={utilStyles.headingSm}>
									I&#39;ve created this project in react to practice and improve
									my skills. I made it with the help of an API called using
									axios, React to create frontend with components and some
									styling.
								</p>
							</li>
							<li className={utilStyles.listItem}>
								<p
									className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}
								>
									Hacker News Website
								</p>
								<a
									href="https://hn-website.netlify.app/"
									target="hackernews"
									className={utilStyles.headingSmAccent}
								>
									Live Demo
								</a>
								<p className={utilStyles.headingSm}>
									A custom infinite scroll implementation for the HackerNews
									website made with React to try Intersection observer API with
									the help of HackerNews API.
								</p>
							</li>
							<li className={utilStyles.listItem}>
								<p
									className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}
								>
									Other Projects.
								</p>
								<a
									href="https://github.com/DevanshBajaj"
									target="github"
									className={utilStyles.headingSmAccent}
								>
									Check it Out!
								</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default projects;
