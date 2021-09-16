import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Head from "next/head";
import Layout from "../components/layout";

export const siteTitle = "Projects";

const projectList = [
	{
		id: 1,
		title: "Pokedex",
		description: `I've created this project in react to practice and improve
		my skills. I made it with the help of an API called using
		axios, React to create frontend with components and some
		styling.`,
		url: `https://pokedex.devanshbajaj.dev/`,
		demo: "Live Demo",
	},
	{
		id: 2,
		title: "Hacker News Website",
		description: `A custom infinite scroll implementation for the HackerNews
		website made with React to try Intersection observer API with
		the help of HackerNews API.`,
		url: `https://hn-website.netlify.app/`,
		demo: "Live Demo",
	},
	{
		id: 3,
		title: "This Website",
		description: `This portfolio site is made with the help of next.js and few libraries to
		make minimal and useful blog website. It also helped me learn many aspects of next.js.`,
		url: `https://github.com/DevanshBajaj/Nextjs-portfolio`,
		demo: "Github Repo",
	},
	{
		id: 4,
		title: "Other Projects.",
		url: `https://github.com/DevanshBajaj`,
		demo: "Check it Out",
	},
];

const projects = () => {
	return (
		<Layout>
			<div className={styles.pagescontainer}>
				<Head>
					<title>{siteTitle}</title>
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
						{siteTitle}
						<span className={utilStyles.accentLink}>.</span>
					</h2>
					{projectList.map((project) => (
						<div key={project.id}>
							<ul className={utilStyles.list}>
								<li className={utilStyles.listItem}>
									<p
										className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}
									>
										{project.title}
									</p>
									<a
										href={project.url}
										target="pokedex"
										className={utilStyles.headingSmAccent}
									>
										{project.demo}
									</a>
									<p className={utilStyles.headingSm}>{project.description}</p>
								</li>
							</ul>
						</div>
					))}
				</section>
			</div>
		</Layout>
	);
};

export default projects;
