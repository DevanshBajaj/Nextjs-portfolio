import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/codeblock";
import Profile from "../../public/images/profile.png";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						postData.title
					)}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
				/>
				<meta name="og:title" content={postData.title} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.blogauthor}>
					<Image
						priority
						src={Profile}
						height={40}
						width={40}
						alt="author"
						className={utilStyles.blogauthor__avatar}
					/>
					<h3 className={utilStyles.marginreset}>
						Devansh Bajaj
						<span> on </span>
						<Date dateString={postData.date} />
					</h3>
				</div>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					components={CodeBlock}
					rehypePlugins={[rehypeRaw]}
					// eslint-disable-next-line react/no-children-prop
					children={postData.markdown}
				/>
			</article>
		</Layout>
	);
}
