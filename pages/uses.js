import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Head from "next/head";
import Layout from "../components/layout";

export const siteTitle = "Uses";

export async function getStaticProps() {
	const codingSoftwares = [
		{
			id: 1,
			title: "Visual Studio Code",
			url: "https://code.visualstudio.com/",
			description: "Hands down my favorite editor",
		},
		{
			id: 2,
			title: "Ariake Dark",
			url: "https://marketplace.visualstudio.com/items?itemName=wart.ariake-dark",
			description: "VS Code Theme",
		},
		{
			id: 3,
			title: "Jetbrains Mono",
			url: "https://code.visualstudio.com/",
			description: "The best programming font I have ever used",
		},
		{
			id: 4,
			title: "Google Chrome",
			url: "https://www.google.com/chrome/",
			description: `Unmatched DevTools 👌`,
		},
		{
			id: 5,
			title: "Postman",
			url: "https://www.postman.com/",
			description: "Best tool for API testing",
		},
	];

	const gearList = [
		{
			id: 1,
			title: "PC",
			description:
				"Ryzen 3600 | NVIDIA GTX 1660s | 16gb ram | 256 GB NVMe M.2 SSD | 3TB HDD",
			url: "https://www.reddit.com/r/pcmasterrace/",
		},
		{
			id: 2,
			title: "ASUS ROG GL553VE",
			description: "PS: Never buy a gaming laptop",
			url: "https://www.asus.com/Laptops/ROG-GL553VE/",
		},
		{
			id: 3,
			title: "Apple iPad",
			description: "8th Generation | 128 GB | Wi-Fi | 1st Gen Pencil",
			url: "https://www.apple.com/in/ipad-10.2/c",
		},
		{
			id: 4,
			title: 'LG 22" IPS Monitor',
			description: "Crisp, bright and *just* the right size",
			url: "https://www.lg.com/in/monitors/lg-22MP68VQ-P",
		},
		{
			id: 5,
			title: "S20 FE",
			description: "only decent sammy with snapdragon",
			url: "https://www.samsung.com/in/smartphones/galaxy-s20/galaxy-s20-fe/",
		},
	];
	return {
		props: {
			codingSoftwares,
			gearList
		}
	}
}

const uses = ({ codingSoftwares, gearList }) => {
	return (
		<Layout className={styles.pagescontainer}>
			<div className={styles.pagescontainer}>
				<Head>
					<title>{siteTitle}</title>
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
				<section>
					<h2 className={utilStyles.heading1Xl}>
						{siteTitle}
						<span className={utilStyles.accentLink}>.</span>
					</h2>
					<div className={utilStyles.paddingLg}>
						<h3 className={utilStyles.headingLg}>
							Coding Software<span className={utilStyles.accentLink}>.</span>
						</h3>
						<ul className={`${utilStyles.list} ${utilStyles.paddingMd}`}>
							{codingSoftwares.map((codesoft) => (
								<li className={utilStyles.listItem} key={codesoft.id}>
									<a
										href={codesoft.url}
										target="_blank"
										rel="noreferrer"
										className={utilStyles.headingMdAccent}
									>
										{codesoft.title}
									</a>
									<p className={utilStyles.headingSm}>{codesoft.description}</p>
								</li>
							))}
						</ul>
						<div className={utilStyles.paddingLg}>
							<h3 className={utilStyles.headingLg}>
								Gear<span className={utilStyles.accentLink}>.</span>
							</h3>
							<ul className={`${utilStyles.list} ${utilStyles.paddingMd}`}>
								{gearList.map((gear) => (
									<li className={utilStyles.listItem} key={gear.id}>
										<a
											href={gear.url}
											target="_blank"
											rel="noreferrer"
											className={utilStyles.headingMdAccent}
										>
											{gear.title}
										</a>
										<p className={utilStyles.headingSm}>{gear.description}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default uses;
