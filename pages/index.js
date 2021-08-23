import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useTheme } from "next-themes";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	const { theme, setTheme } = useTheme();

	return (
		<Layout home>
			{theme !== undefined && (
				<select value={theme} onChange={(e) => setTheme(e.target.value)}>
					<option value="dark">Dark</option>
					<option value="light">Light</option>
					<option value="system">System</option>
				</select>
			)}
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I am proficient in JavaScript and CSS / SASS with experience in
					frameworks like React and Bulma. I also have some experience with
					Python, Docker and Django REST framework. I am currently in the
					process of learning Kotlin.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							{id}
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
