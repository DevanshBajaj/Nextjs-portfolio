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
				<h2 className={`${utilStyles.heading1Xl} ${utilStyles.paddingLg}`}>
					About Me<a className={utilStyles.accentLink}>.</a>
				</h2>
				<p>
					I&#39;m a Frontend developer based in Ghaziabad, India. I have a
					passion for building web applications and designing beautiful user
					interfaces.
					<br />
					<br />
					Recently I&#39;ve been working with technologies like Javascript,
					React, Next.js and I&#39;m currently learning Node.js. I also love
					working with tools like Figma for designing.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}>
				<h2 className={utilStyles.heading1Xl}>
					Recent Posts<a className={utilStyles.accentLink}>.</a>
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.slice(0, 1).map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a className={utilStyles.accentLink}>{title}</a>
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
