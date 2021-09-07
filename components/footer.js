import styles from "./footer.module.css";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const footer = () => {
	return (
		<div className={styles.footer}>
			<a className={styles.footerText}> Designed and built by Devansh Bajaj</a>
			<a
				className={styles.footerEmail}
				href="mailto:devansh21db.db@gmail.com?Subject=Hello"
			>
				devansh21db.db@gmail.com
			</a>
			<div className={styles.logowrapper}>
				<a href="https://twitter.com/devansh21db" target="twitter">
					<FaTwitter />
				</a>
				<a href="https://t.me/devanshbajaj" target="dribble">
					<FaTelegram />
				</a>
			</div>
		</div>
	);
};

export default footer;
