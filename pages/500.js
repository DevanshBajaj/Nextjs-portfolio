import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Custom505() {
	return (
		<Layout>
			<h1 className={utilStyles.notfound}>500 - Server-side error occurred</h1>
		</Layout>
	);
}
