import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Head from "next/head";
import Layout from "../components/layout";

export const siteTitle = "Projects";

const uses = () => {
	return (
		<Layout className={styles.pagescontainer}>
			<Head>
				<title>Uses</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Uses" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<section>adding stuff here soon.....</section>
		</Layout>
	);
};

export default uses;
