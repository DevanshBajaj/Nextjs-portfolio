import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
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
const blog = ({ allPostsData }) => {
	return (
		<div className={styles.container}>
			{allPostsData.map(({ id, date, title }) => (
				<div className={styles.posts} key={id}>
					<Link href={`/posts/${id}`}>
						<a className={utilStyles.headingLg}>{title}</a>
					</Link>
					{id}
					<small className={utilStyles.lightText}>
						<Date dateString={date} />
					</small>
				</div>
			))}
			<Link href="/">
				<a>← Back to home</a>
			</Link>
		</div>
	);
};

export default blog;
