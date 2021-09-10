import Link from "next/link";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

const Offline = () => {
	return (
		<div>
			<h1>You are offline</h1>
			<p>
				You are currently offline. Please check your internet connection and try
				again.
			</p>
			<div className={styles.backToHome}>
				<Link href="/">
					<a className={utilStyles.accentLink}>← Back to home</a>
				</Link>
			</div>
		</div>
	);
};
export default Offline;
