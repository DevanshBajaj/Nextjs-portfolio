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
			<section className={`${utilStyles.paragraphMd} ${utilStyles.paddingLg}`}>
				<h2 className={utilStyles.heading1Xl}>
					About Me<a>.</a>
				</h2>
				<p>
					I&#39;m proficient in JavaScript and CSS / SASS with experience in
					frameworks like React and Next.js. I have some experience with Python,
					Docker and Django REST framework. I also have experience in UI/UX
					designing, I like exploring different ways to make a design user
					friendly. I&#39;m comfortable with prototyping, wireframing using
					tools like Figma and Adobe XD.
				</p>
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
					<a className={utilStyles.headingSmAccent}>More posts</a>
				</Link>
			</section>
		</Layout>
	);
}
