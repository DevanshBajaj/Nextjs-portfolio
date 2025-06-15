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
	const experienceList = [
		{
			id: 1,
			company: "Goalist India Technologies",
			position: "Software Engineer",
			date: "February 2024 - Present",
			companyUrl: "https://goalist.co.jp/",
			description: `Built and maintained a large-scale job platform (grsta.jp
) with Next.js, serving thousands of users and 7,000+ job listings. Migrated a legacy Django-based dental platform (brace-ltd.com
) to React, improving performance and maintainability. Led key features including AI-powered dental image classification, cutting processing time by 90%. Spearheaded frontend for an AI interview tool (samur-ai.tech
) using WebRTC and LiveKit for real-time video interviews.`,
		},
		{
			id: 2,
			company: "Navana Tech",
			position: "Frontend Engineer",
			date: "September 2022- January 2024",
			companyUrl: "https://navana.ai/",
			description: `Led development of Sayl, a WhatsApp CMS platform powering 5M+ messages to 3M+ users across 100+ businesses. Built a live agent dashboard with Chatwoot and maintained its Shopify-integrated self-hosted version. Created an onboarding system reducing support tickets by 70%. Contributed to Karya (with Microsoft Research), enabling 35,000+ rural users to earn $800K through 35M+ tasks. Built internal tools to help data scientists validate regional speech data.`,
		},
	];
	return {
		props: {
			allPostsData,
			experienceList,
		},
	};
}

export default function Home({ allPostsData, experienceList }) {
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
					I&#39;m a Software Engineer based in Delhi, India, with over 3 years
					of professional experience in Frontend Development. I specialize in
					building responsive, accessible, and user-friendly web applications
					using technologies like React, JavaScript, TypeScript, and Next.js.
					<br />
					{/* I&#39;ve worked on large-scale platforms in industries ranging from
					job-tech to healthcare and AI. At Goalist India, I’ve led frontend
					development for platforms like grsta.jp and samur-ai.tech, integrating
					tools like WebRTC and LiveKit to deliver real-time experiences. My
					previous work at Navana Tech involved building scalable solutions for
					WhatsApp-based marketing and data collection platforms supporting
					millions of users. */}
					<br />
					In addition to coding, I&#39;m currently expanding my skills in
					backend development with Node.js, and I love exploring new
					technologies that help craft seamless user experiences.
					<br />
					<br />
					{/* Here you can see the setup I use -
					<Link href="/uses" className={utilStyles.accentLink}>
						Uses.
					</Link> */}
				</p>
			</section>
			<section className={`${utilStyles.paragraphMd} ${utilStyles.paddingLg}`}>
				<h2 className={`${utilStyles.heading1Xl} ${utilStyles.paddingLg}`}>
					Experience<span className={utilStyles.accentLink}>.</span>
				</h2>
				{experienceList?.map((experience) => (
					<div key={experience.id}>
						<ul className={utilStyles.list}>
							<li className={utilStyles.listItem}>
								<a
									href={experience.companyUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={`${utilStyles.headingMd} ${utilStyles.paddingLg} ${utilStyles.accentLink}`}
								>
									{experience.company}
								</a>
								<p className={utilStyles.headingSm}>
									{experience.position} | {experience.date}
								</p>
								<p className={utilStyles.headingSm}>{experience.description}</p>
							</li>
						</ul>
					</div>
				))}
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.paddingLg}`}>
				<h2 className={utilStyles.heading1Xl}>
					Recent Posts<span className={utilStyles.accentLink}>.</span>
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.slice(0, 2).map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`} className={utilStyles.accentLink}>
								{title}
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
				<Link href={`/blog`} className={utilStyles.headingSmAccent}>
					More posts
				</Link>
			</section>
		</Layout>
	);
}
