import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import dynamic from 'next/dynamic'

const Layout = dynamic(
	() => import('../components/layout'),
	{ loading: () => <p>...</p> }
)


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
				<title>Devansh Bajaj</title>
			</Head>
			<section className={`${utilStyles.paragraphMd} ${utilStyles.paddingLg}`}>
				<h2 className={`${utilStyles.heading1Xl} ${utilStyles.paddingLg}`}>
					About Me<span className={utilStyles.accentLink}>.</span>
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
					<br />
					<br />
					Here you can see the setup I use -
					<Link href="/uses">
						<a className={utilStyles.accentLink}>Uses.</a>
					</Link>
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}>
				<h2 className={utilStyles.heading1Xl}>
					Recent Posts<span className={utilStyles.accentLink}>.</span>
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.slice(0, 1).map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a className={utilStyles.accentLink}>{title}</a>
							</Link>
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
