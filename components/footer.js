import styles from "./footer.module.css";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const footer = () => {
	return (
		<div className={styles.footer}>
			<a
				href="https://nextjs-devanshblog.vercel.app/"
				className={styles.footerText}
			>
				Designed and built by Devansh Bajaj
			</a>
			<a
				className={styles.footerEmail}
				href="mailto:db@devanshbajaj.dev?Subject=Hello"
			>
				db@devanshbajaj.dev
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
