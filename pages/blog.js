import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Head from "next/head";
import Date from "../components/date";
import Layout from "../components/layout";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export const siteTitle = "Blogs";

const blog = ({ allPostsData }) => {
	return (
        <Layout>
			<div className={styles.pagescontainer}>
				<Head>
					<title>Blog</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Blogs" />
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle
						)}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<h2 className={utilStyles.heading1Xl}>
					Blogs<span className={utilStyles.accentLink}>.</span>
				</h2>
				{allPostsData.map(({ id, date, title }) => (
					<div className={styles.posts} key={id}>
						<Link
                            href={`/posts/${id}`}
                            className={`${utilStyles.headingLg} ${utilStyles.accentLink}`}>

                            {title}

                        </Link>
						{id}
						<small className={utilStyles.lightText}>
							<Date dateString={date} />
						</small>
					</div>
				))}
			</div>
		</Layout>
    );
};

export default blog;
