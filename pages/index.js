import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
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
			<section className={`${utilStyles.paddingLg}`}>
				<h2 className={utilStyles.heading1Xl}>
					Projects<a>.</a>
				</h2>
				<div>
					<p className={utilStyles.headingMd}>Github</p>
					<a
						href="https://github.com/DevanshBajaj"
						target="github"
						className={utilStyles.headingSmAccent}
					>
						Check it Out!
					</a>
				</div>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}>
				<h2 className={utilStyles.heading1Xl}>
					Recent Posts<a>.</a>
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.slice(0, 1).map(({ id, date, title }) => (
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
				<Link href={`/blog`}>
					<a>More posts</a>
				</Link>
			</section>
		</Layout>
	);
}
